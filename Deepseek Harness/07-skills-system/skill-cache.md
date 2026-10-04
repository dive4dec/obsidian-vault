---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Cache

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Caching loaded skills balances discovery cost against freshness. `dsh-skill` keeps completed provider catalogs in memory, bounded by `collectCacheMaxEntries` (default `128`). By contrast, `dsh-skill-filesystem` re-reads the body on every load, so the cache covers catalog summaries rather than instruction bodies.

## Concrete Example

`collectCacheMaxEntries: 128` on the `dsh-skill` plugin caps how many completed cwd/provider catalogs are retained in memory.

## Analogy

Keeping the most-used recipe cards on the counter while the rest stay in the drawer.

## Related Concepts

- [[skill-registry|Skill Registry]]
- [[skill-load|Load a Skill]]
- [[skill-version|Skill Version]]
- [[skill-timer|Skill Timer]]
