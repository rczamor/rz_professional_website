# Failure modes and recovery

- **GSC pull fails.** Skip S1, S2, S3, S8 for this run; log `gsc_unavailable = true`. Other dimensions still score.
- **Chatbot probe fails.** Q-dimension fires P0 if /api/chat returns 5xx; P1 if eval queries miss expected citations.
- **Lighthouse run fails.** Skip Q-dimension Performance metrics for this run; degrade to a category-level note.
- **Notion write fails.** Retry once; if still failing, dump the assembled report to a local file with `audit_run_id` in the filename and surface the failure in Slack.
- **Linear task creation fails.** Continue with remaining tasks; log the failure in the Notion page Action List.
- **Slack post fails.** Final step; if it fails the audit is still complete in Notion. Surface the Slack failure in the run notes.
