---
tags: [Skills-System]
domain: Skills System
---

# Skill Dispatch

> **Domain:** [[_skills-system-moc|Skills System]]

## Motivation

The agent deciding which skill to use for a task based on the task description and skill descriptions. Dispatch matches need to skill.

## Concrete Example

User asks: Fix my Kubernetes pod. The agent reads skill descriptions, matches k8s-troubleshooting, and dispatches (activates) that skill. Wrong match means wrong approach.

## Analogy

A dispatcher at a taxi company - a call comes in, they match it to the nearest available driver. Skill dispatch matches the task to the right skill.

## Related Concepts

- [[skill-loading|Skill Loading]]
- [[skills-list|Skills List]]
- [[skill-command|Skill Command]]
