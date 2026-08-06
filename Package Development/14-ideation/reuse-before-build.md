---
tags: [Package-Ideation]
domain: Package Ideation
---

# Reuse Before Build

> **Domain:** [[_ideation-moc|Package Ideation]]

## 🎯 Motivation

Always search for existing packages before writing your own. Reusing tested, maintained code saves time and reduces the burden on the ecosystem of duplicated, half-abandoned projects.

## 📋 Concrete Example

Before building `timeflex`, search PyPI for "timetable," "schedule parser," and "ics export." You may find `icalendar` handles export already — your package can depend on it, not reinvent it.

## 🔗 Analogy

Before sewing a shirt from scratch, check your closet. A perfectly good shirt may already exist, and you can spend your sewing time on something you truly lack.

## Related Concepts

- [[gap-analysis|Gap Analysis]]
- [[composable-packages|Composable Packages]]
- [[dry|DRY]]
