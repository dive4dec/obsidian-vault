---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# /busy

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

The busy flag tells the interface that the agent is working so it shows a loading state.

## Concrete Example

When the agent runs a long tool the busy indicator turns on, then turns off when done.

## Analogy

Like a shop sign that flips to Back in 5 minutes while the staff restock.

## Related Concepts

- [[indicator|/indicator]]
- [[statusbar|/statusbar]]
- [[agent-loop|Agent Loop]]
