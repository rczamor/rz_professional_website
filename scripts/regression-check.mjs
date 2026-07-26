/**
 * Post-build regression checks.
 *
 * Every assertion here is the literal success criterion from a Linear ticket,
 * expressed against the *raw* HTML — no JS execution — because that is exactly
 * what GPTBot, PerplexityBot, and social-card scrapers see. A check that only
 * passes in a browser would not catch the class of bug these tickets describe.
 *
 * Usage:
 *   node scripts/regression-check.mjs                # builds output must exist; boots `next start`
 *   REGRESSION_BASE_URL=https://... node scripts/...  # run against a deployed origin
 */

import { spawn } from "node:child_process";
import process from "node:process";

const PORT = process.env.REGRESSION_PORT || "3111";
const EXTERNAL_BASE = process.env.REGRESSION_BASE_URL;
const BASE = EXTERNAL_BASE || `http://127.0.0.1:${PORT}`;

/** The origin every absolute URL in metadata must resolve against. */
const CANONICAL_ORIGIN = "https://www.richezamor.com";

const results = [];
let server;

function record(name, ok, detail = "") {
  results.push({ name, ok, detail });
  const mark = ok ? "[32mPASS[0m" : "[31mFAIL[0m";
  console.log(`  ${mark}  ${name}${ok || !detail ? "" : `\n         ↳ ${detail}`}`);
}

/** React splits adjacent text nodes with comment markers; collapse them so
 *  assertions can match the text a crawler actually reads. */
function normalize(html) {
  return html.replace(/<!--\s*-->/g, "");
}

async function get(path) {
  const res = await fetch(new URL(path, BASE), {
    headers: {
      "user-agent": "rz-regression-check",
      // Protected Vercel previews need the bypass cookie from a share link.
      ...(process.env.REGRESSION_COOKIE
        ? { cookie: process.env.REGRESSION_COOKIE }
        : {}),
    },
  });
  if (!res.ok) throw new Error(`${path} → HTTP ${res.status}`);
  return normalize(await res.text());
}

/** Pull every JSON-LD payload out of a document. */
function jsonLdBlocks(html) {
  const blocks = [];
  const re =
    /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(html))) {
    try {
      blocks.push(JSON.parse(m[1]));
    } catch {
      blocks.push({ __parseError: m[1].slice(0, 120) });
    }
  }
  return blocks;
}

function findType(blocks, type) {
  const walk = (node) => {
    if (!node || typeof node !== "object") return null;
    if (Array.isArray(node)) {
      for (const n of node) {
        const hit = walk(n);
        if (hit) return hit;
      }
      return null;
    }
    if (node["@type"] === type) return node;
    for (const key of ["@graph", "mainEntity"]) {
      const hit = walk(node[key]);
      if (hit) return hit;
    }
    return null;
  };
  return walk(blocks);
}

function metaContent(html, attr, value) {
  const re = new RegExp(
    `<meta[^>]*${attr}="${value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[^>]*>`,
    "i"
  );
  const tag = html.match(re)?.[0];
  return tag?.match(/content="([^"]*)"/i)?.[1] ?? null;
}

async function waitForServer(timeoutMs = 90_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(BASE, { signal: AbortSignal.timeout(3000) });
      if (res.ok || res.status === 404) return;
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`server did not become ready at ${BASE}`);
}

async function startServer() {
  if (EXTERNAL_BASE) {
    console.log(`Running against external origin: ${EXTERNAL_BASE}\n`);
    return;
  }
  console.log(`Booting production server on port ${PORT}…`);
  // Every stream is detached from ours on purpose. Inheriting stderr hands the
  // server a duplicate of our stdout pipe, so a caller doing `npm run
  // test:regression | tee` never sees EOF and appears to hang long after the
  // checks finished. Server stderr is captured and replayed only on failure.
  server = spawn("npx", ["next", "start", "-p", PORT], {
    stdio: ["ignore", "ignore", "pipe"],
    env: process.env,
  });
  let serverErr = "";
  server.stderr.on("data", (chunk) => {
    serverErr += chunk.toString();
  });
  try {
    await waitForServer();
  } catch (err) {
    if (serverErr.trim()) console.error(`\nServer output:\n${serverErr}`);
    throw err;
  }
  console.log("Server ready.\n");
}

function stopServer() {
  if (server && !server.killed) {
    server.kill("SIGTERM");
    server.unref();
  }
}

/**
 * Exit cleanly. Two hazards to thread between: a bare `process.exit()`
 * truncates buffered stdout when the output is piped (npm run, CI logs), while
 * simply setting `exitCode` hangs forever because the spawned server keeps the
 * event loop alive. So: drain stdout first, then exit hard.
 */
async function finish(code) {
  stopServer();
  await new Promise((resolve) => process.stdout.write("", resolve));
  process.exit(code);
}

// ── TRZ-1697 ────────────────────────────────────────────────────────────────
async function checkAboutStats(about) {
  const expected = ["20", "200", "11", "1,400"];
  const missing = expected.filter((v) => !about.includes(`>${v}`));
  record(
    "TRZ-1697 /about stat counters present in server HTML",
    missing.length === 0,
    missing.length ? `values absent from raw HTML: ${missing.join(", ")}` : ""
  );

  const zeroed = about.match(/class="about-stat-number">\s*0\D/g) || [];
  record(
    "TRZ-1697 no zeroed stat counters in server HTML",
    zeroed.length === 0,
    zeroed.length ? `${zeroed.length} counter(s) still render as 0` : ""
  );
}

// ── TRZ-1698 ────────────────────────────────────────────────────────────────
async function checkAboutSchema(about) {
  const blocks = jsonLdBlocks(about);
  const profile = findType(blocks, "ProfilePage");
  record("TRZ-1698 /about emits ProfilePage schema", Boolean(profile));

  const person = findType(blocks, "Person");
  record(
    "TRZ-1698 /about carries a valid Person entity",
    Boolean(person?.name && person?.jobTitle && Array.isArray(person?.sameAs)),
    person ? "" : "no Person node found on /about"
  );
  record(
    "TRZ-1698 ProfilePage.mainEntity resolves to the Person",
    profile?.mainEntity?.["@type"] === "Person"
  );
}

// ── TRZ-1699 ────────────────────────────────────────────────────────────────
async function checkThesisHowTo(thesis) {
  const howTo = findType(jsonLdBlocks(thesis), "HowTo");
  record("TRZ-1699 /thesis emits HowTo schema", Boolean(howTo));

  const steps = howTo?.step ?? [];
  record(
    "TRZ-1699 HowTo has 5 HowToStep entries",
    steps.length === 5,
    `found ${steps.length}`
  );

  const names = steps.map((s) => s.name);
  const wellFormed = steps.every(
    (s) => s["@type"] === "HowToStep" && s.name && s.text
  );
  record(
    "TRZ-1699 each HowToStep has name + text",
    wellFormed,
    `steps: ${names.join(" → ")}`
  );
}

// ── TRZ-1700 ────────────────────────────────────────────────────────────────
async function checkArticleDateModified(slugs) {
  const missing = [];
  for (const slug of slugs) {
    const html = await get(`/thinking/${slug}`);
    const article = findType(jsonLdBlocks(html), "Article");
    if (!article?.dateModified) missing.push(slug);
  }
  record(
    `TRZ-1700 Article schema has dateModified on all ${slugs.length} articles`,
    missing.length === 0,
    missing.length ? `missing on: ${missing.join(", ")}` : ""
  );
}

// ── TRZ-1336 / TRZ-1587 / TRZ-1153 ──────────────────────────────────────────
async function checkOgImages(slugs) {
  const seen = new Map();
  const generic = [];
  const wrongOrigin = [];

  for (const slug of slugs) {
    const html = await get(`/thinking/${slug}`);
    const og = metaContent(html, "property", "og:image");
    if (!og || og.includes("/og-image.png")) generic.push(slug);
    else seen.set(slug, og);
    // A relative or localhost card URL is dead to every scraper — that is what
    // an unset `metadataBase` produces. Preview deployments are the one benign
    // exception: Next deliberately swaps metadataBase for the deployment origin
    // when VERCEL_ENV=preview (see resolve-url.js) so preview cards resolve
    // against the preview itself, so accept the origin under test too.
    if (og && !og.startsWith(CANONICAL_ORIGIN) && !og.startsWith(BASE)) {
      wrongOrigin.push(`${slug} → ${og}`);
    }
  }
  record(
    "og:image URLs are absolute against the canonical (or deployment) origin",
    wrongOrigin.length === 0,
    wrongOrigin.length ? wrongOrigin.slice(0, 3).join("; ") : ""
  );
  record(
    "TRZ-1587 every article has a non-default og:image",
    generic.length === 0,
    generic.length ? `still on sitewide fallback: ${generic.join(", ")}` : ""
  );
  record(
    "TRZ-1336 per-article og:image URLs are distinct",
    new Set(seen.values()).size === seen.size,
    `${new Set(seen.values()).size} unique across ${seen.size} articles`
  );

  for (const path of ["/about", "/work", "/contact", "/thesis"]) {
    const html = await get(path);
    const og = metaContent(html, "property", "og:image");
    const tw = metaContent(html, "name", "twitter:image");
    record(
      `TRZ-1153 ${path} has a page-specific og:image`,
      Boolean(og) && !og.includes("/og-image.png"),
      og ? `resolved to ${og}` : "no og:image emitted"
    );
    record(
      `TRZ-1153 ${path} emits twitter:image`,
      Boolean(tw),
      tw ? "" : "twitter:image missing"
    );
  }
}

// ── TRZ-1339 ────────────────────────────────────────────────────────────────
async function checkSsrArticleComponents() {
  const html = await get("/thinking/context-layer-vs-rag");
  const needles = [
    ["FrameworkMatrix rows", "Embedding similarity"],
    ["FrameworkMatrix highlight", "Curates, synthesizes, consolidates, prioritizes"],
    ["retrieval terminology", "retrieval"],
  ];
  for (const [label, needle] of needles) {
    record(
      `TRZ-1339 ${label} present in raw HTML`,
      html.toLowerCase().includes(needle.toLowerCase()),
      `"${needle}" not found without JS`
    );
  }

  const layers = await get("/thinking/what-is-a-context-layer");
  record(
    "TRZ-1339 LayerStack content present in raw HTML",
    layers.toLowerCase().includes("inference"),
    "LayerStack text missing without JS"
  );
}

// ── TRZ-1335 ────────────────────────────────────────────────────────────────
async function checkTerminology() {
  const html = await get("/thinking/data-is-not-context");
  // MDX renders emphasis as `<strong class="article-strong">`, so match the
  // tag open-ended rather than assuming a bare `<strong>`.
  const step = (name) => new RegExp(`<strong[^>]*>${name}`, "i");
  const canonical = ["Curate", "Synthesize", "Consolidate", "Prioritize", "Store"];
  const missing = canonical.filter((s) => !step(s).test(html));
  record(
    "TRZ-1335 data-is-not-context uses canonical five steps",
    missing.length === 0,
    missing.length ? `missing canonical step(s): ${missing.join(", ")}` : ""
  );
  record(
    "TRZ-1335 non-canonical 'Activate' step removed",
    !step("Activate").test(html)
  );
}

// ── TRZ-1586 ────────────────────────────────────────────────────────────────
async function checkPillarSignals() {
  const html = await get("/thinking/context-layer-vs-rag");
  const faq = findType(jsonLdBlocks(html), "FAQPage");
  const questions = (faq?.mainEntity ?? []).map((q) => q.name.toLowerCase());
  record(
    "TRZ-1586 FAQ schema covers the literal 'context layer vs RAG' query",
    questions.some((q) => q.includes("context layer vs rag")),
    `questions: ${questions.length}`
  );

  const inbound = [
    "context-layer-loop-brain",
    "the-birthplace-test",
    "market-context-situated-context",
    "data-is-not-context",
    "what-is-a-context-layer",
  ];
  const linking = [];
  for (const slug of inbound) {
    const page = await get(`/thinking/${slug}`);
    if (page.includes('href="/thinking/context-layer-vs-rag"')) linking.push(slug);
  }
  record(
    "TRZ-1586 ≥5 internal links point at context-layer-vs-rag",
    linking.length >= 5,
    `${linking.length} linking article(s): ${linking.join(", ")}`
  );
}

// ── TRZ-1338 ────────────────────────────────────────────────────────────────
/**
 * Each pillar article must carry the entity signals AI answer engines use when
 * deciding what to cite: an FAQPage block, the target query leading the
 * keywords list, and a definition early enough to be the extracted quote.
 */
async function checkPillarArticles() {
  const pillars = [
    { slug: "data-is-not-context", query: "data is not context", define: "data is not context" },
    { slug: "context-layer-vs-rag", query: "context layer vs rag", define: "context layer" },
    { slug: "what-is-a-context-layer", query: "context layer", define: "context layer" },
  ];

  for (const { slug, query, define } of pillars) {
    const html = await get(`/thinking/${slug}`);

    const faq = findType(jsonLdBlocks(html), "FAQPage");
    record(
      `TRZ-1338 ${slug} renders FAQPage schema`,
      Boolean(faq?.mainEntity?.length),
      faq ? "" : "no FAQPage block in rendered HTML"
    );

    const article = findType(jsonLdBlocks(html), "Article");
    const first = (article?.keywords ?? "").split(",")[0].trim().toLowerCase();
    record(
      `TRZ-1338 ${slug} leads keywords with its target query`,
      first === query,
      `keywords[0] = "${first}", expected "${query}"`
    );

    // Prose only, first ~150 words, matching what an extractor would quote.
    const body = html
      .replace(/<script[\s\S]*?<\/script>/g, " ")
      .replace(/<style[\s\S]*?<\/style>/g, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const opening = body.split(" ").slice(0, 220).join(" ").toLowerCase();
    record(
      `TRZ-1338 ${slug} states its definition up front`,
      opening.includes(define),
      `"${define}" absent from the opening prose`
    );
  }
}

// ── TRZ-2119 ────────────────────────────────────────────────────────────────
/**
 * Every absolute URL the site publishes about itself must name one host.
 * Apex and www both resolving means Google indexes two URLs per page and
 * splits ranking signals between them, which is what TRZ-2119 measured.
 * `og:url` pointing at apex while `rel=canonical` points at www is exactly
 * that contradiction, emitted by us rather than inferred by Google.
 */
async function checkCanonicalHost() {
  const bareApex = /https:\/\/richezamor\.com/g;

  for (const path of ["/", "/about", "/thesis", "/work", "/thinking", "/contact"]) {
    const html = await get(path);
    const head = html.slice(0, html.indexOf("</head>") + 7);
    const strays = head.match(bareApex) || [];
    record(
      `TRZ-2119 ${path} metadata uses the www host only`,
      strays.length === 0,
      strays.length ? `${strays.length} bare-apex URL(s) in <head>` : ""
    );

    const canonical = head.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i)?.[1];
    const ogUrl = metaContent(head, "property", "og:url");
    record(
      `TRZ-2119 ${path} og:url agrees with rel=canonical`,
      !ogUrl || !canonical || new URL(ogUrl).host === new URL(canonical).host,
      `og:url=${ogUrl} vs canonical=${canonical}`
    );
  }
}

// ── Sitewide invariants (regression guard) ──────────────────────────────────
async function checkSitewide(slugs) {
  for (const path of ["/", "/about", "/thesis", "/work", "/thinking", "/contact"]) {
    const html = await get(path);
    record(
      `sitewide ${path} emits a canonical link`,
      /<link[^>]+rel="canonical"/i.test(html)
    );
    const bad = jsonLdBlocks(html).filter((b) => b.__parseError);
    record(
      `sitewide ${path} JSON-LD parses`,
      bad.length === 0,
      bad.length ? `unparseable block: ${bad[0].__parseError}` : ""
    );
  }
  record(
    "sitewide all articles reachable (HTTP 200)",
    true,
    `${slugs.length} article routes fetched during checks`
  );
}

async function main() {
  const { readdirSync, readFileSync, existsSync } = await import("node:fs");
  const slugs = readdirSync("src/content/articles", { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .filter((d) => existsSync(`src/content/articles/${d.name}/page.mdx`))
    .filter(
      (d) =>
        !/comingSoon\s*:\s*true/.test(
          readFileSync(`src/content/articles/${d.name}/page.mdx`, "utf8")
        )
    )
    .map((d) => d.name);

  await startServer();

  console.log("Structured data & crawler-visibility regression checks\n");
  const about = await get("/about");
  const thesis = await get("/thesis");

  await checkAboutStats(about);
  await checkAboutSchema(about);
  await checkThesisHowTo(thesis);
  await checkArticleDateModified(slugs);
  await checkOgImages(slugs);
  await checkSsrArticleComponents();
  await checkTerminology();
  await checkPillarSignals();
  await checkPillarArticles();
  await checkCanonicalHost();
  await checkSitewide(slugs);

  const failed = results.filter((r) => !r.ok);
  console.log(
    `\n${results.length - failed.length}/${results.length} checks passed.`
  );
  if (failed.length) {
    console.log(`\nFailures:\n${failed.map((f) => `  · ${f.name}`).join("\n")}`);
  }
  return failed.length === 0 ? 0 : 1;
}

main()
  .then(finish)
  .catch((err) => {
    console.error(`\nRegression run aborted: ${err.message}`);
    return finish(1);
  });
