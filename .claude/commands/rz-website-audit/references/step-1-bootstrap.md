# Step 1: Bootstrap

Per `corpus/website-audit/methodology/bootstrap.md`:

1. Generate `audit_run_id` (UUID; threaded into every artifact for traceability).
2. Read the Target Keywords DB (`TARGET_KEYWORDS_DB_ID`), filter status != Deprioritized.
3. Read the Competitors DB (`COMPETITORS_DB_ID`), all rows, group by Tier.
4. Read the most recent page in the Weekly Audits DB (`NOTION_AUDIT_DB_ID`) for delta context.
5. Read `CONTENT_STRATEGY_PAGE_ID` and the Content Topics DB (`CONTENT_TOPICS_DB_ID`) for K4 cluster coverage.
6. Capture in-memory: keyword list, competitor list, last audit summary, content cluster counts.

If any DB returns zero rows, log the empty state in Run notes and continue with the dimensions that don't depend on it.
