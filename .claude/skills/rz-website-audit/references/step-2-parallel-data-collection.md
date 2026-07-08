# Step 2: Parallel data collection

Per `corpus/website-audit/methodology/parallel-data-collection.md`. Run all 10 sub-steps concurrently where possible.

- GSC pulls via BigQuery bulk export at `rz-analytics-495304.searchconsole.*` (tables: `searchdata_url_impression` for keyword/page/position; `searchdata_site_impression` for the 12-week trend)
- Technical QA: Lighthouse against home + 3 article pages; Core Web Vitals from `web-analytics-stats`
- Indexability crawler (S4 source): sitemap-driven; per-URL HTTP status, robots.txt allowance, canonical correctness, internal-link-graph orphan detection
- Vercel deployment health and build logs (read-only)
- Chatbot probe: 3 known-good queries against `/api/chat`; capture latency, error rate, citation accuracy
- AIO query set: run the 20-query set against AI Overviews / Perplexity / ChatGPT, capture citations
- SERP review: run `serp-review-protocol.md` on the top 5 priority terms
- Internal link graph: crawl from sitemap, build inbound/outbound counts per page
- Site fetches: home + each /thinking article for content inspection
- Schema check: view-source on home + sample articles, count distinct JSON-LD types
- Brand voice scan: sample 3 recent /thinking articles for voice drift against the Content Style Guide
- Competitor benchmark prep: read Competitors DB rows (deferred to Step 4 sub-loop)
