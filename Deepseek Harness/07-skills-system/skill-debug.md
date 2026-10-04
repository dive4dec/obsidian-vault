---
tags: [DSH-Skills]
domain: Skills System
---

# Debug a Skill

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Debugging a skill means tracing why it is missing, misnamed, or failing to load. `dsh-skill` re-validates a loaded definition and rejects a stale selection whose name changed between discovery and load, and `dsh-tool-skill` reports distinct errors for invalid, unknown, or model-disabled names. The filesystem provider drops a skill with a warning when a frontmatter boolean is misspelled.

## Concrete Example

`dsh-tool-skill` returns `Error: invalid skill name "<name>"` for a bad name, "unknown or no longer available" for a missing one, and a not-available-for-model-invocation message when `disable-model-invocation` is set.

## Analogy

Reading the oven's error light to see which knob went wrong.

## Related Concepts

- [[skill-errors|Skill Errors]]
- [[skill-load|Load a Skill]]
- [[skill-test|Test a Skill]]
- [[skill-fallback|Skill Fallback]]
