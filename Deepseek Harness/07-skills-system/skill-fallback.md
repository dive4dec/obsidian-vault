---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Fallback

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Fallback is what happens when a skill is missing, stale, or no longer available. `dsh-skill` tolerates unavailable sources without discarding usable results and rejects a stale selection whose name changed between discovery and load. `dsh-tool-skill` reports a missing or model-disabled skill by name instead of failing the whole step, so the agent can adapt.

## Concrete Example

Loading a name that has gone away returns "unknown or no longer available" from `dsh-tool-skill` rather than crashing the turn.

## Analogy

A "recipe not found — here are the closest dishes" note instead of an empty page.

## Related Concepts

- [[skill-debug|Debug a Skill]]
- [[skill-errors|Skill Errors]]
- [[skill-priority|Skill Priority]]
- [[skill-availability|Skill Availability]]
