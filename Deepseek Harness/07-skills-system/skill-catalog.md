---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Catalog

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

The skill catalog is the browseable list of available skills a session exposes. `dsh-skill` merges every provider's winning summaries into one catalog sorted by name, and `dsh-tool-skill` publishes it to the model as a durable user-role message of names and capped descriptions. The Web client lists user-invocable skills through the `skills/list` Remote.

## Concrete Example

The merged catalog from `dsh-skill` is what `dsh-tool-skill` renders, capping each description at `catalogDescriptionMaxLength` (default 500).

## Analogy

The combined table of contents across every cookbook in the kitchen.

## Related Concepts

- [[skill-registry|Skill Registry]]
- [[skill-list|List Skills]]
- [[skill-search|Search Skills]]
- [[skill-availability|Skill Availability]]
