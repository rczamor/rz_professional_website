---
name: rz-website-audit
version: 0.2.0
description: >
  Use this skill whenever Riché invokes /rz-website-audit, asks to "run the
  website audit", "run the weekly site review", "audit richezamor.com", or
  when the Cowork shortcut fires the Sunday 8pm trigger with the body
  "Run the rz-website-audit skill." Also invoke for any request that mentions
  website audit, website QA, website scorecard, AI citation tracking,
  website regression check, weekly site review of richezamor.com, SEO
  health check, AIO health check, or competitor benchmarking against
  richezamor.com. This is the orchestrating skill that runs the full weekly
  audit across SEO (S1–S7 atomic), AIO (A1–A7 atomic), Traffic & Engagement,
  Usability, Design, Brand, Technical QA, the Ask Riché chatbot, Keyword
  Research, and Competitor Benchmarking. Produces a Notion page in the
  Weekly Website Audits database, creates up to 5 P0/P1 Linear tasks in the
  Brand project with spaced due dates Mon–Fri, and pings #brand in Slack
  with a one-line traffic-light headline.
---

# Website Audit — Riché Zamor

Weekly site audit of richezamor.com. Runs every Sunday at 8pm America/New_York via Claude Cowork shortcut, or manually via `/rz-website-audit` in Claude Code. Produces a structured Notion page, issues up to 5 prioritized Linear tasks, and posts a single-line headline to Slack.

## Before beginning work

The corpus has migrated to Notion. Notion is the source of truth — the local `corpus/*` paths cited below are historical and may drift. Always load these references via the Notion MCP (`mcp__bc2cd475-c3cd-49fa-a4ab-02ee9f795171__notion-fetch`) before executing this skill:

1. **Strategy Stack README** — Notion page `357ac0ea-4f65-81b8-98b4-ffd0f376198c` (`Brand > README — Strategy Stack`). Doc ownership, canonical constants (richezamor.com is the **acquisition channel via organic + AIO**), and the Decision-of-Record log. Honor it; flag drift.
2. **Your sections of the Corpus** at `Projects > RZ Claude Skills > Corpus`:
   - `website-audit` → page `357ac0ea-4f65-8158-be44-e9f5ccfd8119` (canonical: methodology, dimensions SEO/AIO/categories, competitor benchmarking, databases)
   - `growth` → page `357ac0ea-4f65-812a-a480-d3b7ab463bc2` (SEO methodology owned by `rz-growth-marketing`, channels positioning, target keywords)
   - `voice` → page `357ac0ea-4f65-8194-ae1e-e5147adad60c` (brand hygiene checks must reference voice canon)

Each Corpus directory page lists its child entries. Fetch only the specific entries you need.

## Cross-skill dependencies (read these first)

The audit is a tactical skill. It does not own SEO methodology or brand voice. It LEVERAGES the canonical sources owned by other role-based skills.

**SEO and keyword research are owned by `rz-growth-marketing`.** Pull from `corpus/growth/seo/` for keyword research methodology, SERP review protocol, topic clusters, the monthly Keyword Planner workflow, and the Target Keywords DB schema. The audit's S1–S7 atomic dimensions and K1–K5 keyword-research category dimensions reference this corpus; they do NOT redefine SEO concepts.

**Brand voice is owned by `rz-copywriting`.** Pull from `corpus/voice/` for the fatal-fifteen AI-tells list, voice anti-patterns, terminology rules, and the 50/30/20 domain balance frame. The audit's B1–B5 brand checks are detection rules ON TOP of the voice canon; they do NOT redefine voice rules.

If a dimension entry's text contradicts these source-of-truth corpora, the source-of-truth corpora win. Surface the contradiction in `rz-self-improve` for cleanup.

## Tooling scope (v0.2.0) — zero Ahrefs

The audit runs on a deliberately narrow tool stack. **Ahrefs is no longer a dependency.** Anything not listed is out of scope.

**GSC data — BigQuery bulk export.**

- Project: `rz-analytics-495304`
- Dataset: `searchconsole`
- Primary tables: `searchdata_url_impression` (URL-level), `searchdata_site_impression` (site-aggregated)
- MCP: `mcp__d6df0178-7cc7-4d35-8fc0-2144d7aced61__execute_sql_readonly` (BigQuery)
- Standard partition: `data_date` (date-partitioned)
- Standard metrics: `impressions`, `clicks`, `sum_position` (divide by impressions for avg position)

The four queries the audit runs at Step 2 are documented in `references/step-2-parallel-data-collection.md` and replace the prior `gsc-keywords`, `gsc-pages`, `gsc-performance-history`, `gsc-anonymous-queries` Ahrefs calls.

**Lighthouse + lychee — delegated to Claude Code Routines.** The skill does NOT run Lighthouse or lychee inline. It reads their latest run output from the Routine artifacts directory.

**Keyword research — manual.** The audit consumes (1) the Notion Target Keywords DB (whose volumes are refreshed monthly by Riché via the manual Keyword Planner workflow — see `corpus/growth/seo/keyword-planner-monthly.md` and Linear TRZ-883), and (2) live `web_search` for K3 SERP review.

**Backlinks — dropped from weekly scope.** GSC's bulk export does not include the Links report. S8 (backlink loss) has been removed from the weekly dimension list pending a decision on the replacement source (GSC Links API direct, manual quarterly Links download, or accept the gap). See `references/quarterly-rebaseline.md` for the placeholder.

**Explicitly out of scope (was Ahrefs, now removed):**

- All `gsc-*` Ahrefs endpoints → BigQuery
- `keywords-explorer-*` → manual (TRZ-883 monthly + `web_search` live)
- `serp-overview` → manual `web_search` per `serp-review-protocol.md`
- `site-explorer-all-backlinks`, `site-explorer-backlinks-stats`, `site-explorer-referring-domains` → S8 deferred, see above
- `site-explorer-organic-competitors` → new-competitor surfacing happens via `web_search` during quarterly rebaseline
- Inline Lighthouse / lychee → Claude Code Routines

## Load from corpus

Read these in order before running. The corpus carries the actual audit logic; this file is the orchestrator.

**Methodology (always)**
- `corpus/website-audit/methodology/bootstrap.md`
- `corpus/website-audit/methodology/parallel-data-collection.md`
- `corpus/website-audit/methodology/severity-scoring.md`
- `corpus/website-audit/methodology/report-assembly.md`
- `corpus/website-audit/methodology/task-issuance.md`
- `corpus/website-audit/methodology/slack-notification.md`

**Database schemas (always)**
- `corpus/growth/seo/target-keywords-schema.md` *(owned by rz-growth-marketing)*
- `corpus/website-audit/databases/competitors-schema.md`
- `corpus/website-audit/databases/weekly-audits-schema.md`

**SEO atomic dimensions**
- `corpus/website-audit/dimensions/seo/s1-ranking-regression.md`
- `corpus/website-audit/dimensions/seo/s2-low-ctr.md`
- `corpus/website-audit/dimensions/seo/s3-quick-wins.md`
- `corpus/website-audit/dimensions/seo/s4-indexability.md`
- `corpus/website-audit/dimensions/seo/s5-metadata-completeness.md`
- `corpus/website-audit/dimensions/seo/s6-structured-data.md`
- `corpus/website-audit/dimensions/seo/s7-internal-linking.md`
- ~~`corpus/website-audit/dimensions/seo/s8-backlink-loss.md`~~ — **deferred** (see Tooling scope; needs new source decision)

**AIO atomic dimensions**
- `corpus/website-audit/dimensions/aio/a1-citation-absence.md`
- `corpus/website-audit/dimensions/aio/a2-citation-rank-decline.md`
- `corpus/website-audit/dimensions/aio/a3-crawler-accessibility.md`
- `corpus/website-audit/dimensions/aio/a4-js-only-content.md`
- `corpus/website-audit/dimensions/aio/a5-quotability-density.md`
- `corpus/website-audit/dimensions/aio/a6-entity-consistency.md`
- `corpus/website-audit/dimensions/aio/a7-ai-friendly-schema.md`

**Category-level dimensions**
- `corpus/website-audit/dimensions/categories/traffic-engagement.md`
- `corpus/website-audit/dimensions/categories/usability.md`
- `corpus/website-audit/dimensions/categories/design.md`
- `corpus/website-audit/dimensions/categories/brand.md`
- `corpus/website-audit/dimensions/categories/technical-qa.md`
- `corpus/website-audit/dimensions/categories/chatbot.md`
- `corpus/website-audit/dimensions/categories/keyword-research.md`

**Keyword research methodology** *(owned by rz-growth-marketing)*
- `corpus/growth/seo/free-stack-overview.md`
- `corpus/growth/seo/keyword-planner-monthly.md`
- `corpus/growth/seo/serp-review-protocol.md`
- `corpus/growth/seo/topic-clusters.md`

**Competitor benchmarking**
- `corpus/website-audit/competitor-benchmarking/read-protocol.md`
- `corpus/website-audit/competitor-benchmarking/what-gets-benchmarked.md`

## Constants

```
WEBSITE_DOMAIN              = richezamor.com
MAX_WEEKLY_TASKS            = 5
RUN_TIMEZONE                = America/New_York
VERCEL_PROJECT_ID           = prj_qtI2I2fvlAH5qeTnc4EVW52stG9t
VERCEL_TEAM_ID              = team_G5bsJ43GY5r9RqMjT4iEYO5c
LINEAR_TEAM_ID              = 72132418-b477-4450-a30a-77391d5cfc47
LINEAR_PROJECT_ID           = 085484ef-b523-4142-bce2-7f9a23a05fa1
LINEAR_ASSIGNEE_ID          = 646e8aef-65f5-47de-ba40-4f2ad99bbc15
NOTION_PARENT_ID            = 333ac0ea4f658086bcafcd3f53299b89
NOTION_AUDIT_DB_ID          = 6d5673aef5a94f17867602778949f869
NOTION_AUDIT_DS_ID          = 889093b4-fb7d-4db5-a871-19e7bbe159fd
TARGET_KEYWORDS_DB_ID       = f5521fe72dec42c1808555fbac2d0d62
TARGET_KEYWORDS_DS_ID       = df1d8efa-ff31-4b18-beb5-0998e9dd9bc2
COMPETITORS_DB_ID           = c99eaa6d2e7448f0859ce6feba22a3ac
COMPETITORS_DS_ID           = 596ee7d6-46d8-464a-adfc-489576de0052
CONTENT_STRATEGY_PAGE_ID    = 333ac0ea4f6581518651d730d706e017
CONTENT_TOPICS_DB_ID        = 2c224f29490d44f99e7b58cb2e377086
SLACK_CHANNEL               = #brand
DOMAIN_BALANCE_TARGET       = 50% Context Layer / 30% PM / 20% Leadership
KEYWORD_PLANNER_STALE_DAYS  = 30
SERP_ANALYSIS_TOP_N         = 5
QUARTERLY_REBASELINE_MONTHS = January, April, July, October (first Sunday)
GSC_BQ_PROJECT              = rz-analytics-495304
GSC_BQ_DATASET              = searchconsole
GSC_BQ_URL_TABLE            = searchdata_url_impression
GSC_BQ_SITE_TABLE           = searchdata_site_impression
LIGHTHOUSE_ARTIFACT_DIR     = ~/Documents/Claude/Routines/lighthouse/latest/
LYCHEE_ARTIFACT_DIR         = ~/Documents/Claude/Routines/lychee/latest/
```

## Process

### Step 1 — Bootstrap
Per `methodology/bootstrap.md`:
1. Verify required MCP connectors are reachable: Notion, Linear, Slack, Vercel, BigQuery. Confirm the BigQuery service-account has read access to `{GSC_BQ_PROJECT}.{GSC_BQ_DATASET}` by listing tables.
2. Verify the Lighthouse + lychee Claude Code Routines have produced a fresh artifact in their respective dirs within the last 24 hours. If stale, log `routine_stale=<routine>` and continue with degraded scoring on that dimension.
3. Read prior audit page from Weekly Audits DS for diff baseline.
4. Read Target Keywords DB and Competitors DB into memory.
5. Initialize empty findings buffer for each dimension.

### Step 2 — Parallel data collection
Per `methodology/parallel-data-collection.md`. Concurrent fetches:
- **GSC via BigQuery** — four queries against `{GSC_BQ_PROJECT}.{GSC_BQ_DATASET}` (full SQL in `references/step-2-parallel-data-collection.md`).
- **richezamor.com crawl** — every page in sitemap, fetch + render-without-JS check.
- **AIO 20-query set** across the LLMs Riché tracks.
- **Lightweight competitor check** — for each Competitors DB row: URL alive (HEAD), content shipped this week (RSS or sitemap diff). Full benchmark moved to quarterly.
- **Vercel deployment health** + recent build logs (read-only).
- **Lighthouse + lychee** — **read latest artifact** from `LIGHTHOUSE_ARTIFACT_DIR` / `LYCHEE_ARTIFACT_DIR`. Do NOT invoke them inline.
- **K3 SERP review** — manual `web_search` per `serp-review-protocol.md` on the top `SERP_ANALYSIS_TOP_N` priority terms.

### Step 3 — Run dimensions
For each dimension corpus entry, evaluate against collected data. Write findings to the buffer with severity (P0/P1/P2) per `methodology/severity-scoring.md`. Order:

1. SEO S1–S7 (atomic — each is its own corpus entry). S8 (backlink loss) is **deferred** pending source decision.
2. AIO A1–A7 (atomic)
3. Traffic & Engagement T1–T5 (single corpus entry)
4. Usability U1–U4 (single corpus entry)
5. Design D1–D5 (single corpus entry)
6. Brand B1–B5 (single corpus entry)
7. Technical QA Q1–Q9 (single corpus entry — Performance metrics read from Lighthouse Routine artifact; link integrity from lychee Routine artifact)
8. Chatbot C1–C5 (single corpus entry)
9. Keyword Research K1–K5 (single corpus entry; K3 SERP review uses the `web_search` results from Step 2)
10. Competitor Benchmarking deltas — **lightweight weekly only**. Full re-benchmark happens in the quarterly rebaseline.

### Step 4 — Assemble report
Per `methodology/report-assembly.md`. Build the 15-section audit page in memory. Compute headline color per the rules in `databases/weekly-audits-schema.md`. Do not write to Notion yet.

### Step 5 — Issue tasks
Per `methodology/task-issuance.md`. Take the top P0 + P1 findings, capped at MAX_WEEKLY_TASKS (5). Create Linear issues in LINEAR_PROJECT_ID, assigned to LINEAR_ASSIGNEE_ID, with due dates spaced Mon–Fri across the coming week. Use the create-then-update pattern (create simple, then update with full content) — direct create-with-full-payload errors out unreliably. Capture the TRZ-### IDs.

### Step 6 — Write Notion page
Single write to Weekly Audits DS using NOTION_AUDIT_DS_ID. Include the Linear TRZ-### IDs in the Tasks Issued section. Set headline color last, after task issuance is confirmed.

### Step 7 — Slack notification
Per `methodology/slack-notification.md`. One-line headline to SLACK_CHANNEL with traffic-light emoji, task count, and a link to the Notion audit page.

### Step 8 — Update Target Keywords DB
Write back `Current Position` and `Last Checked` for every Researching/Targeting/Ranking row processed. Fire status promotions (Ranking → Won) per the 4-week confirmation rule in `corpus/growth/seo/target-keywords-schema.md`. **Do NOT touch `Monthly Volume` or `Volume Last Updated`** — those are owned by the monthly Keyword Planner refresh task (TRZ-883).

### Step 9 — Update Competitors DB
Lightweight `Last Audited` + `URL Alive` + `Shipped This Week` only. Tier/positioning/full benchmark fields are owned by the quarterly rebaseline.

## Quarterly rebaseline

On the first Sunday of January, April, July, and October, the audit additionally:
- Re-scores all 14 competitors regardless of tier (full benchmark per `competitor-benchmarking/what-gets-benchmarked.md`)
- Reviews Won and Deprioritized rows in Target Keywords DB for any needed status changes
- Logs a quarterly summary section at the top of the audit page
- Surfaces new-competitor candidates via `web_search` for tier-assignment review

See `references/quarterly-rebaseline.md` for detail.

## What this skill does NOT do

- It does not draft or publish content. K3 fires issue Linear tasks; Riché writes the article via `/rz-draft-content`.
- It does not refresh Keyword Planner volumes. That's Riché's monthly manual workflow per `corpus/growth/seo/keyword-planner-monthly.md` (operationalized as Linear TRZ-883).
- It does not re-tier competitors. Tier changes are a quarterly Riché decision.
- It does not auto-fix any issues it finds. It diagnoses, scores, and issues tasks. Fixes happen via separate skills or manual Riché work.
- It does not run Lighthouse or lychee inline. Both run as Claude Code Routines on their own schedule; the audit reads the latest artifact.
- It does not call Ahrefs. GSC data comes from BigQuery; keyword research is manual; backlinks are deferred.

## Cross-skill connections

**Upstream (the audit reads from these for canonical knowledge):**

- `rz-growth-marketing` — owns SEO and keyword research methodology. The audit reads `corpus/growth/seo/` for the free-stack approach, SERP review protocol, topic clusters, monthly Keyword Planner workflow, and the Target Keywords DB schema. The audit's K1–K5 dimensions and S1–S7 atomic fires use these as source of truth.
- `rz-copywriting` — owns brand voice. The audit reads `corpus/voice/` for the fatal-fifteen AI tells and the 50/30/20 domain balance. B1–B5 dimensions detect drift against this canon.

**Downstream (the audit hands off to these for fixes):**

- `rz-content-optimize` — when K3 fires and a Linear task is issued, that task references rz-content-optimize for keyword + entity coverage when Riché drafts the article.
- `rz-copywriting` — B1 (voice) findings reference rz-copywriting's voice rules. The audit detects voice drift; rz-copywriting fixes it.
- `rz-graphic-design` — D5 (OG images) findings reference rz-graphic-design when an article ships without proper OG asset.
- `rz-self-improve` — runs as the SessionEnd hook in retrospective mode; logs any audit-time exceptions for next-run improvement.

**Sibling Routines (the audit reads their artifacts):**

- `lighthouse` Claude Code Routine — produces `~/Documents/Claude/Routines/lighthouse/latest/`. Owned by Routine schedule, not this skill.
- `lychee` Claude Code Routine — produces `~/Documents/Claude/Routines/lychee/latest/`. Owned by Routine schedule, not this skill.
