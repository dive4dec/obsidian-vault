---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Skill Tool

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

dsh-tool-skill gives agents a session skill catalog and the skill loader tool: before the first request, the agent receives a durable catalog of available skill names with capped descriptions, and calls skill name=... to load full instructions. Users can invoke a user-invocable skill with /name, which injects the same instructions into that step. Catalog changes append a complete replacement, including an empty catalog that retires old names.

## Concrete Example

skill name=obsidian loads that skill's instructions; catalogDescriptionMaxLength (default 500) caps each catalog description.

## Analogy

The agent's library card catalog, where it requests a book before reading it.

## Related Concepts

- [[tools|Tools]]
- [[tool|Tool]]
