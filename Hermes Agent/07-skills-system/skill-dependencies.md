---
tags: [Skills-System]
domain: Skills System
---

# Skill Dependencies

> **Domain:** [[_skills-system-moc|Skills System]]

## Motivation

Some skills depend on others or on external tools. Declaring dependencies ensures the agent checks before using the skill.

## Concrete Example

A skill declares: requires: [git, gh-cli]. Before loading, the agent checks git and gh are installed. If not, it tells you to install them first.

## Analogy

A recipe that needs a specific pan - before starting, you check you have it. If not, you buy it first. Skill dependencies are checked before the skill runs.

## Related Concepts

- [[skills-check|Skills Check]]
- [[skill-scripts|Skill Scripts]]
- [[skill-validation|Skill Validation]]
