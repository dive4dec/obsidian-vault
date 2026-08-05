---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# max_turns

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

max_turns stops the agent from looping forever. It is a safety limit on how many turns one conversation can take.

## Concrete Example

If max_turns is 25, the agent stops after 25 turns even if the model keeps asking for more tools.

## Analogy

Like a game with extra time: when the whistle blows the game ends no matter what.

## Related Concepts

- [[agent-loop|Agent Loop]]
- [[iteration|iteration]]
- [[run_conversation|run_conversation]]
