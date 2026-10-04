---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Errors

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Skill errors are the common failure modes when a skill is missing, invalid, or blocked. `dsh-tool-skill` distinguishes `Error: invalid skill name "<name>"`, an unknown-or-no-longer-available name, and a skill not available for model invocation. `dsh-skill-filesystem` drops a whole skill with a warning when a frontmatter boolean is misspelled, and `dsh-skill-office` rejects activation on missing or relative resource paths.

## Concrete Example

Calling the `skill` tool with a typo'd name yields `Error: invalid skill name "office-dox"` rather than a silent no-op.

## Analogy

The specific error message on a recipe step that tells you exactly what went wrong.

## Related Concepts

- [[skill-debug|Debug a Skill]]
- [[skill-fallback|Skill Fallback]]
- [[skill-security|Skill Security]]
- [[skill-test|Test a Skill]]
