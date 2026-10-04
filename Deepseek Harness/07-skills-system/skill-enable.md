---
tags: [DSH-Skills]
domain: Skills System
---

# Enable a Skill

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Enabling a skill means turning on the provider or composition row that registers it so it enters the session catalog. Some bundled providers ship disabled and must be enabled explicitly — `dsh-skill-badge` is included as `disabled: true` in the shipped CLI composition. A loader entry's `disabled` flag stops an entry and prevents it from starting.

## Concrete Example

Adding an enabled composition row for `@deepseek-ai/dsh-skill-badge` (or removing its `disabled: true`) makes `dsh-badge` appear in the catalog.

## Analogy

Plugging in an appliance so it shows up on the power strip.

## Related Concepts

- [[skill-disable|Disable a Skill]]
- [[skill-availability|Skill Availability]]
- [[skill-group|Skill Group]]
- [[skill-profile|Skill per Profile]]
