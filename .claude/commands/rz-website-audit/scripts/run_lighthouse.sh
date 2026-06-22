#!/usr/bin/env bash
# Lighthouse runner for rz-website-audit Q-dimension (technical QA).
#
# Runs a mobile Lighthouse audit against a URL and emits the structured
# values the audit consumes: overall score, LCP, INP, CLS, TTFB, plus
# the perf score breakdown.
#
# Output is JSON, one line, suitable for piping to jq or severity_score.py
# downstream.
#
# Usage:
#   run_lighthouse.sh https://richezamor.com/
#   run_lighthouse.sh https://richezamor.com/ --raw   # full Lighthouse JSON
#   run_lighthouse.sh https://example.com/ --form-factor desktop
#
# Requires: node >=18 and the lighthouse npm package (install with
# `npm i -g lighthouse` or use npx).
#
# Exit codes:
#   0   success, scores written to stdout
#   1   Lighthouse run failed
#   2   bad usage

set -euo pipefail

URL=""
FORM_FACTOR="mobile"
RAW=0

while [[ $# -gt 0 ]]; do
    case "$1" in
        --form-factor)
            FORM_FACTOR="$2"
            shift 2
            ;;
        --raw)
            RAW=1
            shift
            ;;
        --help|-h)
            sed -n '2,20p' "$0"
            exit 0
            ;;
        -*)
            echo "unknown flag: $1" >&2
            exit 2
            ;;
        *)
            if [[ -z "$URL" ]]; then
                URL="$1"
                shift
            else
                echo "extra positional arg: $1" >&2
                exit 2
            fi
            ;;
    esac
done

if [[ -z "$URL" ]]; then
    echo "usage: run_lighthouse.sh <url> [--form-factor mobile|desktop] [--raw]" >&2
    exit 2
fi

if ! command -v lighthouse >/dev/null 2>&1 && ! command -v npx >/dev/null 2>&1; then
    echo "error: neither 'lighthouse' nor 'npx' is on PATH" >&2
    echo "install with: npm i -g lighthouse" >&2
    exit 1
fi

LH_CMD=("lighthouse")
if ! command -v lighthouse >/dev/null 2>&1; then
    LH_CMD=("npx" "--yes" "lighthouse")
fi

TMP=$(mktemp -t lighthouse-XXXXXX.json)
trap 'rm -f "$TMP"' EXIT

# Run Lighthouse with sensible defaults for a CI-style run.
"${LH_CMD[@]}" \
    "$URL" \
    --output=json \
    --output-path="$TMP" \
    --only-categories=performance,accessibility,best-practices,seo \
    --form-factor="$FORM_FACTOR" \
    --chrome-flags="--headless=new --no-sandbox --disable-gpu" \
    --quiet \
    1>/dev/null 2>&1 || {
        echo "error: lighthouse run failed for $URL" >&2
        exit 1
    }

if [[ "$RAW" -eq 1 ]]; then
    cat "$TMP"
    exit 0
fi

# Extract the audit-relevant subset using jq if available; otherwise
# fall back to a small node script.
if command -v jq >/dev/null 2>&1; then
    jq -c '{
        url: .finalUrl,
        form_factor: .configSettings.formFactor,
        scores: {
            performance: (.categories.performance.score * 100 | round),
            accessibility: (.categories.accessibility.score * 100 | round),
            best_practices: (.categories["best-practices"].score * 100 | round),
            seo: (.categories.seo.score * 100 | round)
        },
        core_web_vitals: {
            lcp_seconds: (.audits["largest-contentful-paint"].numericValue / 1000),
            inp_ms: .audits["interactive"].numericValue,
            cls: .audits["cumulative-layout-shift"].numericValue,
            ttfb_ms: .audits["server-response-time"].numericValue
        }
    }' "$TMP"
else
    node -e '
        const r = JSON.parse(require("fs").readFileSync(process.argv[1], "utf8"));
        const round = (x) => Math.round(x * 100);
        const out = {
            url: r.finalUrl,
            form_factor: r.configSettings.formFactor,
            scores: {
                performance: round(r.categories.performance.score),
                accessibility: round(r.categories.accessibility.score),
                best_practices: round(r.categories["best-practices"].score),
                seo: round(r.categories.seo.score)
            },
            core_web_vitals: {
                lcp_seconds: r.audits["largest-contentful-paint"].numericValue / 1000,
                inp_ms: r.audits["interactive"].numericValue,
                cls: r.audits["cumulative-layout-shift"].numericValue,
                ttfb_ms: r.audits["server-response-time"].numericValue
            }
        };
        console.log(JSON.stringify(out));
    ' "$TMP"
fi
