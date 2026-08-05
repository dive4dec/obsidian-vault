---
tags: [Hermes-Fundamentals]
domain: Hermes Fundamentals
---

# Max Turns

> **Domain:** [[_hermes-fundamentals-moc|Hermes Fundamentals]]

## Motivation

The agent loop has a safety limit called max turns, defaulting to 90. This stops Hermes from running forever if it gets stuck. You can raise or lower the limit.

## Concrete Example

Hermes is on turn 85 of a complex research task. It knows it has 5 turns left and starts wrapping up its answer.

## Analogy

Like a chess clock. When time is almost up, you play faster and finish your move.

## Related Concepts

- [[agent-loop|Agent Loop]]
- [[config-sections|Config Sections]]
