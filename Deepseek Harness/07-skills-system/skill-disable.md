---
tags: [DSH-Skills]
domain: Skills System
---

# Disable a Skill

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Disabling a skill removes it from the catalogs and loaders that would otherwise advertise it. This can happen at the composition level (a provider row set `disabled: true`, as `dsh-skill-badge` ships by default) or at the invocation-policy level, where `disable-model-invocation: true` keeps a skill out of model-facing surfaces while it may remain user-invocable. Disposing a plugin removes its candidates entirely.

## Concrete Example

Setting `disable-model-invocation: true` on a `dsh-skill-filesystem` skill removes it from the model catalog, leaving a user `/name` invocation as its only entry point.

## Analogy

Pulling a recipe card out of circulation so it no longer shows in the index.

## Related Concepts

- [[skill-enable|Enable a Skill]]
- [[skill-availability|Skill Availability]]
- [[skill-permission|Skill Permission]]
- [[skill-fallback|Skill Fallback]]
