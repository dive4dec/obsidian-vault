---
tags: [DSH-Skills]
domain: Skills System
---

# List Skills

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Listing skills enumerates what is available and what each does, from the merged catalog. `dsh-tool-skill` surfaces a durable user-role message listing each model-invocable skill's name and a capped description before the first request, and the Web client serves user-invocable skills through the `skills/list` Remote. Catalog changes append a complete replacement, including an empty catalog that retires old names.

## Concrete Example

`dsh-tool-skill` caps each rendered description at `catalogDescriptionMaxLength` (default `500`, minimum 3) in the session catalog it publishes to the model.

## Analogy

A table of contents showing every chapter title and a one-line summary.

## Related Concepts

- [[skill-registry|Skill Registry]]
- [[skill-discovery|Skill Discovery]]
- [[skill-tool|Skill Tool]]
- [[skill-catalog|Skill Catalog]]
