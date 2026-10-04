---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Sandbox

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

A skill that runs code or scripts executes within the dsh sandbox boundary, not in an unrestricted context. dsh enforces file and process sandbox modes (workspace-write / danger-full-access) across its operations, and a skill's tool calls inherit those same guards. This keeps a skill's effects confined to the workspace it was launched into.

## Concrete Example

A `dsh-skill-office` script that writes a converted PDF does so under the session's file sandbox, so a path outside the workspace root is denied rather than written.

## Analogy

A kitchen with locked doors that only let you touch the counters you were given.

## Related Concepts

- [[skill-permission|Skill Permission]]
- [[skill-security|Skill Security]]
- [[skill-errors|Skill Errors]]
- [[skill-deps|Skill Dependencies]]
