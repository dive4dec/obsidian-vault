---
tags: [Skills-System]
domain: Skills System
---

# Skill Auto-Discovery

> **Domain:** [[_skills-system-moc|Skills System]]

## Motivation

The agent automatically finds and loads relevant skills based on the task, without you manually specifying which skill to use.

## Concrete Example

You ask: Help me deploy to Kubernetes. The agent scans skill descriptions, finds k8s-troubleshooting and helm-chart-deployment, and loads them automatically. No manual command needed.

## Analogy

A smart phone suggesting the right app - when you get on a plane, it offers the airline app. When you arrive at a restaurant, it suggests the menu app. Auto-discovery suggests the right skill.

## Related Concepts

- [[skill-dispatch|Skill Dispatch]]
- [[skill-loading|Skill Loading]]
- [[skills-config|Skills Config]]
