---
tags: [Skills-System]
domain: Skills System
---

# Skill Loading

> **Domain:** [[_skills-system-moc|Skills System]]

## Motivation

The process of reading a SKILL.md file and bringing its instructions into the agent working memory so it can follow the steps.

## Concrete Example

When the agent decides to debug, it loads the debugging skill: reads SKILL.md, loads any referenced scripts, and now knows the 4-phase debugging method.

## Analogy

Opening a textbook to a chapter - the knowledge goes from the shelf (disk) into your mind (memory). Skill loading moves instructions from file to active use.

## Related Concepts

- [[skill-dispatch|Skill Dispatch]]
- [[skill-references|Skill References]]
- [[reload-skills|Reload Skills]]
