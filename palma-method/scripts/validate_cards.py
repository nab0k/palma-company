#!/usr/bin/env python3
"""Validate required top-level metadata in Palma YAML research cards.

This intentionally uses the Python standard library only. It checks structure and
presence, not full YAML semantics, so the sprint has a zero-dependency guardrail.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]

CARD_TYPES = {
    "source-cards": {
        "id",
        "title",
        "author",
        "year",
        "source_type",
        "url_or_identifier",
        "date_accessed",
        "research_track",
        "book_chapters",
        "core_claim",
        "summary",
        "limitations",
        "confidence_level",
        "verification_status",
    },
    "case-cards": {
        "id",
        "organization",
        "period",
        "case_type",
        "business_problem",
        "relationship_problem",
        "intervention",
        "outcomes",
        "sources",
        "source_quality",
        "limitations",
        "book_chapters",
    },
}

KEY_PATTERN = re.compile(r"^([A-Za-z_][A-Za-z0-9_-]*):(?:\s|$)")
ID_PATTERNS = {
    "source-cards": re.compile(r"^SRC-\d{4}-\d{3}$"),
    "case-cards": re.compile(r"^CASE-\d{4}-\d{3}$"),
}


def parse_top_level(path: Path) -> tuple[set[str], dict[str, str]]:
    keys: set[str] = set()
    values: dict[str, str] = {}
    for line in path.read_text(encoding="utf-8").splitlines():
        if line.startswith((" ", "\t", "-")):
            continue
        match = KEY_PATTERN.match(line)
        if not match:
            continue
        key = match.group(1)
        keys.add(key)
        values[key] = line.split(":", 1)[1].strip().strip('"').strip("'")
    return keys, values


def validate(path: Path, card_type: str) -> list[str]:
    keys, values = parse_top_level(path)
    errors = [f"missing key: {key}" for key in sorted(CARD_TYPES[card_type] - keys)]
    card_id = values.get("id", "")
    if card_id and not ID_PATTERNS[card_type].match(card_id):
        errors.append(f"invalid id format: {card_id}")
    return errors


def main() -> int:
    failures = 0
    checked = 0
    for card_type in CARD_TYPES:
        folder = ROOT / "research" / card_type
        for path in sorted(folder.glob("*.yaml")):
            checked += 1
            errors = validate(path, card_type)
            if errors:
                failures += 1
                print(f"FAIL {path.relative_to(ROOT)}")
                for error in errors:
                    print(f"  - {error}")
            else:
                print(f"OK   {path.relative_to(ROOT)}")
    if checked == 0:
        print("No source or case cards found; structure is valid and ready for cards.")
    print(f"Checked: {checked}; failed: {failures}")
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
