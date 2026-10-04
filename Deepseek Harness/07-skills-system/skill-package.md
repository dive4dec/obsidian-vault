---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Package

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Bundling a skill as a package lets it ship and install like any other dsh plugin. Bundled providers are published as `@deepseek-ai` packages whose `assets/` directory carries the skill body and resources. `dsh-skill-badge` and `dsh-skill-office` are exactly this: a plugin entry that registers one or more skills and exposes a packaged resource base.

## Concrete Example

`@deepseek-ai/dsh-skill-office` is a package whose `assets/` holds the three Office skill folders and a shared `scripts/` directory, configurable via its `assetRoot` field.

## Analogy

A boxed, installable cookbook you can drop into a new kitchen.

## Related Concepts

- [[skill-badge|Skill Badge]]
- [[skill-office|Office Skill]]
- [[skill-registry|Skill Registry]]
- [[skill-deps|Skill Dependencies]]
