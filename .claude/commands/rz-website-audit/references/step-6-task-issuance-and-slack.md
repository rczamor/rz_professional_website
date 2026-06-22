# Step 6: Issue tasks and post Slack

**6a. Linear tasks** per `corpus/website-audit/methodology/task-issuance.md`:

- Walk findings in priority order: all P0, then P1 by dimension, then P2 if budget remains.
- Cap at `MAX_WEEKLY_TASKS` (= 5). Findings beyond the cap roll into the Action List on the Notion page.
- Each task: `LINEAR_TEAM_ID`, `LINEAR_PROJECT_ID`, `LINEAR_ASSIGNEE_ID`, severity-derived priority, link back to the Notion audit page section.
- Write the task count back to the Weekly Audits page's `Linear Tasks Created` property.

**6b. Slack notification** per `corpus/website-audit/methodology/slack-notification.md`:

- Post to `SLACK_CHANNEL` (`#brand`)
- One line: traffic light emoji + Summary + link to the Weekly Audits Notion page
- Do NOT paste the full report body to Slack
