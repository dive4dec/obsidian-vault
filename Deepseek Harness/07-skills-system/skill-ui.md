---
tags: [DSH-Skills]
domain: Skills System
---

# Skill UI

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

`dsh-client-ui-skill` is the Web client surface for invoking skills by name. Users type `/` in the composer and pick from suggestions, or type `/name` directly; the same literal command loads the skill consistently across the Web composer, TUI, and ACP. Skill calls render as expandable `Instructions` cards whose settled contents stay stable when the installed catalog changes.

## Concrete Example

Candidates come from the `skills/list` Remote, ranked by `rankByName`; a `modelInvocable: false` entry (a `disable-model-invocation` skill) shows a user-only marker, and clicking a known skill opens its `SKILL.md` path in the right sidebar.

## Analogy

An autocomplete search bar over the available manuals.

## Related Concepts

- [[skill-list|List Skills]]
- [[skill-params|Skill Parameters]]
- [[skill-badge|Skill Badge]]
- [[skill-tool|Skill Tool]]
