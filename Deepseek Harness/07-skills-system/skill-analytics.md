---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Analytics

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Skill analytics tracks how skills are used in a session. `dsh-tool-skill` retains each load as ordinary tool history with a canonical `<skill_content>` result, and `dsh-client-ui-skill` records the requested skill name and arguments on the tool row, so invocations are observable after the fact. dsh's broader telemetry layer (OTel) can surface these as metrics.

## Concrete Example

A `skill` tool call appears in the trajectory as a recorded argument (the skill name) and a durable output, replayable from the frozen call/result slice.

## Analogy

A kitchen log noting which recipes were used and how often.

## Related Concepts

- [[skill-examples|Skill Examples]]
- [[skill-params|Skill Parameters]]
- [[skill-list|List Skills]]
- [[skill-output|Skill Output]]
