#!/usr/bin/env python3
"""
Severity scoring for rz-website-audit findings.

Implements the rules from corpus/website-audit/methodology/severity-scoring.md:
finding-level severity (P0/P1/P2), per-dimension traffic light
(green/yellow/red), and overall audit traffic light.

Inputs:
    JSON list of findings on stdin or via --file. Each finding must have:
        - dimension: short code (e.g. "S1", "A3", "B1")
        - impact: int 1-5
        - effort: int 1-5
    Optional fields:
        - site_breaking: bool (forces P0)
        - dimension_override: "P0" | "P1" | "P2" (locks severity, e.g. A3 always P0)

Output:
    JSON object with:
        - findings: each input finding with severity field added
        - per_dimension_lights: dict of dimension -> "green" | "yellow" | "red"
        - overall_light: worst dimension light
        - summary: counts of P0 / P1 / P2

Usage:
    severity_score.py --file findings.json
    cat findings.json | severity_score.py
    severity_score.py --self-test    # run unit tests, exit 0 if clean
"""

from __future__ import annotations

import argparse
import json
import sys
from collections import defaultdict
from typing import Iterable


SEVERITIES = ("P0", "P1", "P2")
LIGHTS = ("green", "yellow", "red")
LIGHT_RANK = {"green": 0, "yellow": 1, "red": 2}


def score_finding(finding: dict) -> str:
    """Return P0 / P1 / P2 for a single finding per the canonical rules."""
    override = finding.get("dimension_override")
    if override in SEVERITIES:
        return override

    if finding.get("site_breaking"):
        return "P0"

    impact = int(finding["impact"])
    effort = int(finding["effort"])

    if not (1 <= impact <= 5 and 1 <= effort <= 5):
        raise ValueError(f"impact and effort must be 1-5; got impact={impact}, effort={effort}")

    if impact == 5:
        return "P0"
    if impact >= 4 and effort <= 3:
        return "P0"
    if impact >= 3 and effort <= 4:
        return "P1"
    return "P2"


def dimension_light(severities: list[str]) -> str:
    """Compute per-dimension traffic light from a list of finding severities."""
    p0_count = sum(1 for s in severities if s == "P0")
    p1_count = sum(1 for s in severities if s == "P1")

    if p0_count >= 2:
        return "red"
    if p0_count == 1 or p1_count >= 3:
        return "yellow"
    return "green"


def overall_light(per_dimension: dict[str, str]) -> str:
    """Worst per-dimension light becomes the overall light."""
    if not per_dimension:
        return "green"
    return max(per_dimension.values(), key=lambda x: LIGHT_RANK[x])


def score_all(findings: list[dict]) -> dict:
    """Walk findings, return scored output dict."""
    scored = []
    by_dimension: dict[str, list[str]] = defaultdict(list)
    for f in findings:
        sev = score_finding(f)
        scored_finding = dict(f)
        scored_finding["severity"] = sev
        scored.append(scored_finding)
        by_dimension[f["dimension"]].append(sev)

    per_dim_lights = {dim: dimension_light(sevs) for dim, sevs in by_dimension.items()}
    summary = {
        "P0": sum(1 for f in scored if f["severity"] == "P0"),
        "P1": sum(1 for f in scored if f["severity"] == "P1"),
        "P2": sum(1 for f in scored if f["severity"] == "P2"),
    }

    return {
        "findings": scored,
        "per_dimension_lights": per_dim_lights,
        "overall_light": overall_light(per_dim_lights),
        "summary": summary,
    }


def self_test() -> int:
    """Sanity-check the rules against examples from severity-scoring.md."""
    cases: list[tuple[dict, str, str]] = [
        # (finding, expected_severity, label)
        ({"dimension": "Q", "impact": 5, "effort": 2}, "P0", "site-breaking proxy (impact=5)"),
        ({"dimension": "Q", "impact": 5, "effort": 2, "site_breaking": True}, "P0", "explicit site-breaking"),
        ({"dimension": "S2", "impact": 4, "effort": 2}, "P0", "high-impact low-effort"),
        ({"dimension": "S2", "impact": 4, "effort": 4}, "P1", "high-impact medium-effort"),
        ({"dimension": "K4", "impact": 4, "effort": 5, "dimension_override": "P1"}, "P1", "dim override (K4 always P1)"),
        ({"dimension": "S7", "impact": 3, "effort": 4}, "P1", "moderate-impact moderate-effort"),
        ({"dimension": "S7", "impact": 3, "effort": 5}, "P2", "moderate-impact high-effort"),
        ({"dimension": "A3", "impact": 1, "effort": 5, "dimension_override": "P0"}, "P0", "A3 always P0"),
    ]
    failures = []
    for finding, expected, label in cases:
        actual = score_finding(finding)
        marker = "ok" if actual == expected else "FAIL"
        print(f"[{marker}] {label}: expected={expected} actual={actual}")
        if actual != expected:
            failures.append(label)

    # Traffic-light assertions
    assert dimension_light([]) == "green"
    assert dimension_light(["P2", "P2"]) == "green"
    assert dimension_light(["P1", "P1"]) == "green"
    assert dimension_light(["P1", "P1", "P1"]) == "yellow"
    assert dimension_light(["P0"]) == "yellow"
    assert dimension_light(["P0", "P0"]) == "red"
    assert overall_light({"S": "green", "A": "yellow", "B": "green"}) == "yellow"
    assert overall_light({"S": "green", "A": "yellow", "Q": "red"}) == "red"
    print("[ok] dimension_light + overall_light assertions pass")

    return 1 if failures else 0


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--file", type=str, help="JSON findings file (default: stdin)")
    parser.add_argument("--self-test", action="store_true", help="Run unit tests and exit")
    args = parser.parse_args()

    if args.self_test:
        return self_test()

    if args.file:
        with open(args.file) as fh:
            findings = json.load(fh)
    else:
        findings = json.load(sys.stdin)

    if not isinstance(findings, list):
        print("error: input must be a JSON list of findings", file=sys.stderr)
        return 2

    output = score_all(findings)
    print(json.dumps(output, indent=2))
    return 0


if __name__ == "__main__":
    sys.exit(main())
