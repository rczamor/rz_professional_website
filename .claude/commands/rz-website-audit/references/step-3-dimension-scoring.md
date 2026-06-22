# Step 3: Score the 22 dimensions

Walk every dimension entry. For each, evaluate the trigger condition against this run's data. When a trigger fires, capture the finding (page URL, metric, observation) and the dimension's defined severity.

The 8 SEO atomic and 7 AIO atomic dimensions are evaluated per-page and aggregate to category traffic lights. The 7 category-level dimensions evaluate via their own sub-checks defined in each category file.

Apply severity rules per `corpus/website-audit/methodology/severity-scoring.md`:

- **P0** if impact = 5 OR (impact ≥4 AND effort ≤3) OR site-breaking
- **P1** if impact ≥3 AND effort ≤4
- **P2** otherwise
- Dimension-level definitions override the impact/effort calculation when more specific (e.g., A3 is always P0)

Compute per-dimension traffic light: green if no P0 and ≤2 P1; yellow if 1 P0 OR 3+ P1; red if 2+ P0. Overall light is the worst dimension light.
