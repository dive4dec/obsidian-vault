---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Lifecycle

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

The skill lifecycle is the path from authoring to use: create a skill, test it, have it discovered, load it, and version it. `dsh-skill-filesystem` keeps discovery (frontmatter) and loading (body) on separate lifecycles and watches roots so changes reach the next catalog without a restart, while `dsh-skill` re-validates on load and rejects stale selections.

## Concrete Example

Author `deploy/SKILL.md`, confirm it appears in the catalog, load it via the `skill` tool, then edit its body — the next load re-reads the file automatically.

## Analogy

A recipe's journey from being written, test-cooked, filed, used, and updated.

## Related Concepts

- [[skill-authoring|Skill Authoring]]
- [[skill-test|Test a Skill]]
- [[skill-load|Load a Skill]]
- [[skill-version|Skill Version]]
