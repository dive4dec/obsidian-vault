---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Availability

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Skill availability is which skills are actually present and loadable in a given session. It is shaped by which providers are mounted, a skill's invocation policy (`modelInvocable` / `userInvocable`), and `dsh-tool-skill`'s catalog rules: the catalog is omitted entirely when no model-invocable skills exist or the `skill` tool is hidden or shadowed. Removing every skill appends an empty catalog that retires old names.

## Concrete Example

With `dsh-skill-badge` disabled, `dsh-badge` is out of every catalog; enabling it makes it appear and loadable by name in that session.

## Analogy

Which recipes are actually in the binder you have on hand right now.

## Related Concepts

- [[skill-enable|Enable a Skill]]
- [[skill-disable|Disable a Skill]]
- [[skill-profile|Skill per Profile]]
- [[skill-fallback|Skill Fallback]]
