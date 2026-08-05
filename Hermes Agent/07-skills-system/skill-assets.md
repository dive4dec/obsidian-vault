---
tags: [Skills-System]
domain: Skills System
---

# Skill Assets

> **Domain:** [[_skills-system-moc|Skills System]]

## Motivation

Static files within a skill: images, data files, config examples. Assets are used but not executed, unlike scripts.

## Concrete Example

A pixel-art skill has assets/nes-palette.json containing the NES colour palette. The agent reads this file when generating pixel art but never runs it. It is data, not code.

## Analogy

Ingredients in a kitchen - flour, sugar, eggs are assets. You use them to cook but they are not tools (scripts). Skill assets are the raw materials a skill uses.

## Related Concepts

- [[skill-scripts|Skill Scripts]]
- [[skill-references|Skill References]]
- [[skillmd|SKILL.md]]
