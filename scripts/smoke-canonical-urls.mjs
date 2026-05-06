import fs from "node:fs";
import path from "node:path";

const DEFAULT_BASE_URL = "https://richezamor.com";
const ROOT = process.cwd();
const ARTICLES_DIR = path.join(ROOT, "src/content/articles");
const STATIC_PATHS = ["/", "/thinking", "/thesis", "/about", "/work"];
const TIMEOUT_MS = 15_000;

function extractMetadataSource(content) {
  const marker = "export const metadata";
  const markerIndex = content.indexOf(marker);
  if (markerIndex === -1) return "";

  const braceStart = content.indexOf("{", markerIndex);
  if (braceStart === -1) return "";

  let depth = 0;
  for (let i = braceStart; i < content.length; i += 1) {
    const char = content[i];
    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return content.slice(braceStart, i + 1);
    }
  }

  return "";
}

function readPublishedArticlePaths() {
  if (!fs.existsSync(ARTICLES_DIR)) return [];

  return fs
    .readdirSync(ARTICLES_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .flatMap((entry) => {
      const mdxPath = path.join(ARTICLES_DIR, entry.name, "page.mdx");
      if (!fs.existsSync(mdxPath)) return [];

      const metadataSource = extractMetadataSource(fs.readFileSync(mdxPath, "utf8"));
      if (/comingSoon\s*:\s*true/.test(metadataSource)) return [];

      const slugMatch = metadataSource.match(/slug\s*:\s*["'`]([^"'`]+)["'`]/);
      const slug = slugMatch?.[1] ?? entry.name;
      return [`/thinking/${slug}`];
    })
    .sort();
}

function buildUrl(baseUrl, pathname) {
  return new URL(pathname, baseUrl).toString();
}

async function fetchStatus(url, method) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      method,
      redirect: "follow",
      signal: controller.signal,
    });
    return { status: response.status, url: response.url };
  } finally {
    clearTimeout(timeout);
  }
}

async function checkUrl(url) {
  let result = await fetchStatus(url, "HEAD");
  if (result.status === 405 || result.status === 403) {
    result = await fetchStatus(url, "GET");
  }
  return result;
}

async function main() {
  const baseUrl = process.argv[2] || process.env.SMOKE_BASE_URL || DEFAULT_BASE_URL;
  const paths = [...STATIC_PATHS, ...readPublishedArticlePaths()];
  const failures = [];

  console.log(`Checking ${paths.length} canonical URLs against ${baseUrl}`);

  for (const pathname of paths) {
    const url = buildUrl(baseUrl, pathname);
    try {
      const { status, url: finalUrl } = await checkUrl(url);
      if (status < 200 || status >= 300) {
        failures.push(`${url} returned HTTP ${status} at ${finalUrl}`);
        console.error(`::error title=Canonical URL smoke failed::${url} returned HTTP ${status} at ${finalUrl}`);
      } else {
        const suffix = finalUrl !== url ? ` -> ${finalUrl}` : "";
        console.log(`ok ${status} ${url}${suffix}`);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      failures.push(`${url} failed: ${message}`);
      console.error(`::error title=Canonical URL smoke failed::${url} failed: ${message}`);
    }
  }

  if (failures.length > 0) {
    console.error("\nCanonical URL smoke test failed:");
    for (const failure of failures) console.error(`- ${failure}`);
    process.exit(1);
  }

  console.log("\nCanonical URL smoke test passed.");
}

main();
