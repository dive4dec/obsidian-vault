---
tags: [DSH-Skills]
domain: Skills System
---

# Load a Skill

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Loading a skill fetches its full instruction body after it has been discovered, keeping the catalog itself lightweight. `dsh-skill` returns the body from whichever provider owns the winning candidate and re-validates the loaded definition, rejecting a stale selection whose name changed between discovery and load. `dsh-skill-filesystem` re-reads the current file on every load, so editing a skill body needs no cache invalidation.

## Concrete Example

The model calls the `skill` tool with the exact name and receives the body in a canonical `<skill_content>` block, retained as ordinary tool history.

## Analogy

Opening a specific recipe card from the index to read its full steps.

## Related Concepts

- [[skill-tool|Skill Tool]]
- [[skill-instructions|Skill Instructions]]
- [[skill-cache|Skill Cache]]
- [[skill-system|Skill System]]
