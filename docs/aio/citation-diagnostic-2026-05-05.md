# AIO Citation Diagnostic — 2026-05-05
**Linear:** TRZ-557

## TL;DR

The worst axis is **schema/structured data**: the dynamic `/thinking/[slug]` route ships zero JSON-LD (no Article, no FAQPage, no BreadcrumbList), while every citation winner ships at least Article + Breadcrumb, and the strongest (Atlan) ships a fully structured Q&A section that maps cleanly to PAA-style answer engines. The single highest-leverage remediation is to add Article + FAQPage + BreadcrumbList JSON-LD to the article template and surface FAQs as visible H3-anchored Q&A on every essay. Expected impact: with comparable on-page entity density and a working production deploy, the richezamor essays already match competitors on quotability and exceed them on conceptual originality, so closing the schema gap and shipping the live URLs should put richezamor.com in the cited-source set on at least Q1 (where the four-layer framing is genuinely original) within one re-crawl cycle.

## Methodology

I ran three Tavily searches for the canonical AIO queries, picked the top citation-likely competitor for each (preferring established vendor blogs over personal Medium posts), then WebFetched both sides for each of three (query, competitor, richezamor) triples. The richezamor production URLs all return 404 today (pending production deploy of the worktree branch), so I read the local MDX files at `src/content/articles/<slug>/page.mdx` for the richezamor side, and verified competitor JSON-LD via direct curl against each live page. Queries and matched URLs:

1. `what is a context layer in AI products` — Atlan: `https://atlan.com/know/ai-readiness/context-layer-101/` vs richezamor: `https://richezamor.com/thinking/what-is-a-context-layer` (404 in prod; local MDX read).
2. `naive RAG vs context layer` — TowardsAI: `https://towardsai.net/p/machine-learning/traditional-rag-vs-context-engineering-vs-corrective-vs-contextual-a-decision-guide` vs richezamor: `https://richezamor.com/thinking/data-is-not-context` (404 in prod).
3. `context architecture as product strategy` — STAC Research: `https://stacresearch.com/news/the-ai-context-skyscraper/` vs richezamor: `https://richezamor.com/thinking/market-context-situated-context` (404 in prod).

For each pair I scored four axes: entity recognition, schema, quotability, link authority. Schema was verified by extracting `@type` tokens from competitor HTML and grep'ing the richezamor route handler at `src/app/thinking/[slug]/page.tsx`.

---

## Query 1: "what is a context layer in AI products"

**Competitor:** https://atlan.com/know/ai-readiness/context-layer-101/
**richezamor:** https://richezamor.com/thinking/what-is-a-context-layer (pending production deploy)

| Axis | Atlan | richezamor.com | Gap |
|---|---|---|---|
| Entity recognition | "Context Layer" appears in H1, URL slug, and 12+ FAQ H3s. Brand "Atlan" repeats throughout. Strong. | "Context Layer" in H1, slug, and FAQ. Author "Riché Zamor" not surfaced in body or byline metadata. Strong on concept, weak on author entity. | Author entity not cited; LLMs can't attribute. |
| Schema | BlogPosting, BreadcrumbList, Organization, Person, ImageObject, WebSite. No FAQPage despite text-based FAQs. | None. Route ships zero JSON-LD. No Article, no FAQPage, no Breadcrumb. | Critical: 6 schema types vs 0. |
| Quotability | Medium — declarative but vendor-conditioned. | High — multiple sub-30-word declarative claims. | richezamor wins on prose, loses on machine readability. |
| Link authority | Vendor blog with established traffic. Atlan is referenced across enterprise data discourse. | Personal site, low DR, new content. | Major gap — domain authority. |

**Sample quote (Atlan):** "Data is what is. Context is what it means."
**Sample quote (richezamor):** "A memory store is where information lives. A Context Layer decides which information matters, before it ever reaches the model."

**Diagnosis:** Atlan wins on this query because it ships the schema scaffolding (BlogPosting + BreadcrumbList + Organization), repeats the entity "context layer" 40+ times in headers, and is hosted on a domain LLMs already treat as authoritative for "data context" topics. The richezamor essay actually has a stronger original framing — the four-layer separation (data / retrieval / context / inference) is not in the Atlan piece — but LLMs cannot find or attribute it because (a) the production URL 404s, (b) the route ships no Article schema, and (c) author entity "Riché Zamor" never appears in the rendered body or as Person schema.

**Remediation:**
- Ship the production deploy. URL must resolve before any other axis matters.
- Add Article + FAQPage + BreadcrumbList JSON-LD to `src/app/thinking/[slug]/page.tsx`. The MDX already declares a `faq` array — render it both visibly and as FAQPage schema.
- Add Person schema (Riché Zamor, sameAs LinkedIn / X) so LLMs can attribute the four-layer framing to a named author.
- Add an explicit "What is a Context Layer?" H2 with a sub-30-word definition in the first 200 words. Atlan's first-paragraph definition is its citation hook; match it.

---

## Query 2: "naive RAG vs context layer"

**Competitor:** https://towardsai.net/p/machine-learning/traditional-rag-vs-context-engineering-vs-corrective-vs-contextual-a-decision-guide
**richezamor:** https://richezamor.com/thinking/data-is-not-context (pending production deploy)

| Axis | TowardsAI | richezamor.com | Gap |
|---|---|---|---|
| Entity recognition | "RAG" and "Context Engineering" repeated in H1 and decision table. Author named (Vikram Bhat). Strong. | "Retrieval" and "context" present. "Naive RAG" never literally appears (essay uses "RAG pipeline"). Weak entity match. | Direct query-string mismatch on richezamor side. |
| Schema | BlogPosting, NewsArticle, BreadcrumbList, WebPage, Person, Organization. | None. | Critical. |
| Quotability | Strong — explicit one-line thesis. | Strong — five-step list is a quotable atomic structure. | Comparable, slight edge to richezamor on memorability. |
| Link authority | TowardsAI is an established ML publication, indexed heavily in LLM training corpora. | Personal site. | Major gap. |

**Sample quote (TowardsAI):** "Naive RAG often fails because of how context is structured."
**Sample quote (richezamor):** "If what you're retrieving was never curated, synthesized, consolidated, prioritized, or stored intelligently, your RAG pipeline is just efficiently delivering noise."

**Diagnosis:** This is the query where richezamor has the weakest term-match. The essay attacks the same problem TowardsAI attacks (RAG hands models raw chunks; structuring is the missing step), but it never uses the literal phrase "naive RAG." LLM retrieval is still heavily lexical for technical jargon, so a query containing "naive RAG" will surface pages that contain "naive RAG." The richezamor quote is also longer than ideal — 30+ words — making it less likely to be lifted verbatim. TowardsAI's shorter, declarative "naive RAG often fails because of how context is structured" is the kind of sentence answer engines extract whole.

**Remediation:**
- Add an explicit "Naive RAG vs Context Layer" H2 section to `data-is-not-context` with a sub-30-word thesis sentence using both terms literally.
- Add an FAQ entry: "What's the difference between naive RAG and a context layer?" — matches voice-search and AIO query patterns directly.
- Tighten the "five-step pipeline" framing into one declarative sentence (current version is a list, not a quotable proposition).
- Add Article + FAQPage schema as in Q1.

---

## Query 3: "context architecture as product strategy"

**Competitor:** https://stacresearch.com/news/the-ai-context-skyscraper/
**richezamor:** https://richezamor.com/thinking/market-context-situated-context (pending production deploy)

| Axis | STAC Research | richezamor.com | Gap |
|---|---|---|---|
| Entity recognition | "Context as Architecture" is an explicit H2. "Architecture" repeated throughout. Strong. | "Market context" / "situated context" — original framing not yet a recognized entity. Strong on novel terms but weak on query-match. | Different terms for the same idea. |
| Schema | Article, BreadcrumbList, WebPage, Organization, Person. | None. | Critical. |
| Quotability | Strong — "context is the soul of the AI age enterprise." | Very strong — multiple declarative one-liners ("Knowledge is situated. It lives in the setting"). | richezamor wins on quotability. |
| Link authority | STAC Research — financial-services-research vertical, moderate authority for the AI/finance overlap. | Personal site. | Moderate gap (smaller than Q1/Q2). |

**Sample quote (STAC Research):** "Context is the very soul of the current AI age enterprise."
**Sample quote (richezamor):** "Knowledge is situated. It lives in the setting, not just in the head."

**Diagnosis:** This is the query where richezamor is closest to winning — the "situated cognition" frame is genuinely original and the prose is denser with quotable sentences than the competitor. The reason LLMs still wouldn't cite it is twofold: (a) the URL 404s in production, and (b) the page never says the literal phrase "context architecture as product strategy" — the title leans on "market context vs situated context" which is a richezamor-coined frame, so a query using industry-canonical terms misses. STAC Research's "skyscraper" metaphor is the same cognitive move (architecting context) but lands on the canonical phrase.

**Remediation:**
- Add an explicit H2 or sub-heading using the canonical phrase "context architecture" or "context as product strategy" so the query-matches the page lexically.
- Add a tl;dr or summary block at the top with a sub-30-word declarative sentence pairing "context" + "moat" + "product strategy" — anchor the citation hook.
- Cross-link from this essay to the "what-is-a-context-layer" essay using the four-layer framing as the bridge — internal authority compounds.
- Schema as in Q1/Q2.

---

## Cross-cutting findings

- **Schema parity is non-existent.** Three out of three competitors ship Article (or BlogPosting) + BreadcrumbList + Organization + Person JSON-LD. The richezamor `/thinking/[slug]` route ships none. This is the single largest mechanical gap and the cheapest to close — it's a one-file edit at `src/app/thinking/[slug]/page.tsx`.
- **The MDX already has the data the schema needs.** Each article's metadata block declares `title`, `excerpt`, `date`, `readTime`, and (for the strongest piece) a `faq` array. The schema can be hydrated from `metadata` with no content changes.
- **Production URLs 404.** The three target essays are merged into the worktree branch but not yet deployed to www.richezamor.com. No AIO work matters until this is fixed.
- **Lexical entity match is uneven.** richezamor essays use original framings ("situated context," "five-step loop," "four layers") that are stronger conceptually but weaker for queries that use industry-canonical phrases ("naive RAG," "context architecture," "context layer for AI"). Each essay needs at least one explicit canonical-phrase H2 to bridge.
- **Quotability is already competitive.** On every query, richezamor produces at least one sub-30-word declarative sentence as good as or better than the competitor. The content is not the bottleneck.

## Worst-performing axis

**Schema / structured data.** Every competitor ships at minimum an Article-class schema with BreadcrumbList; richezamor ships none on the dynamic article route. Schema is deterministic, cheap, and known to materially affect AIO citation behavior — it tells the engine what kind of object the page is, who authored it, and which Q&A pairs are atomic. Without it, even a perfect essay reads as orphaned text. Atlan compounds this by structuring its FAQ as visible H3s the page templates pick up, even without FAQPage schema; richezamor's `faq` metadata arrays exist but aren't rendered or schemaed at all.

## Recommended follow-up tickets

- **Add Article + FAQPage + BreadcrumbList + Person JSON-LD to `/thinking/[slug]`** — Closes the largest single gap; hydrates from existing MDX metadata. Effort: S.
- **Render `faq` arrays as visible H3-anchored Q&A on every article** — Doubles up: AIO entity density plus schema source. Effort: S.
- **Add canonical-phrase H2 bridges to each of the 3 essays** ("What is a context layer," "Naive RAG vs context layer," "Context architecture as product strategy") — Closes lexical query-match gap without changing the original framing. Effort: S.
- **Add author Person schema with sameAs links (LinkedIn, X, GitHub)** so LLMs can attribute originality back to Riché Zamor as a named entity — long-term compounding asset. Effort: S.
- **Audit production deploy pipeline** — Three high-value essays sitting at 404 in production is the kind of error that wipes out months of writing leverage. Add a smoke test that pings the canonical thinking URLs after each deploy and fails the build on 404. Effort: M.
