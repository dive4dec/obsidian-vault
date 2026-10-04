---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Discovery

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Discovery is how dsh finds which skills exist in a workspace and where they live. `dsh-skill-filesystem` scans its project, custom, and user roots for `<name>/SKILL.md` or flat `<name>.md` files and parses each one's frontmatter into a catalog entry, while `dsh-skill` merges every provider's report into a single catalog. Discovery parses only the frontmatter; the body is read on load.

## Concrete Example

The filesystem provider's watcher means a newly added skill under `<dshHome>/skills` appears in the next catalog without a restart, and `includeDefaultRoots: false` scopes an isolated provider to its own configured roots.

## Analogy

An index-building pass that reads each document's label before opening the full text.

## Related Concepts

- [[skill-filesystem|Skill Filesystem]]
- [[skill-registry|Skill Registry]]
- [[skill-list|List Skills]]
- [[skill-availability|Skill Availability]]
