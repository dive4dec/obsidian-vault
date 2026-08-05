---
tags: [Development-&-Contributing]
domain: Development & Contributing
---

# Hermes Doctor

> **Domain:** [[_development-contributing-moc|Development & Contributing]]

## Motivation

A diagnostic command: hermes doctor [--fix]. Checks dependencies, config, and environment. Fixes issues automatically with --fix.

## Concrete Example

hermes doctor. Output: Python 3.11 OK. Config OK. API key: MISSING. Run: hermes doctor --fix. Hermes sets up the missing key. All green.

## Analogy

A medical checkup - the doctor checks your health. If something is wrong, they prescribe treatment. hermes doctor checks Hermes health and prescribes fixes.

## Related Concepts

- [[cli|CLI]]
- [[hermes-status|Hermes Status]]
- [[troubleshooting|Troubleshooting]]
