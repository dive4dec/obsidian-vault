---
tags: [Memory-&-State]
domain: Memory & State
---

# Checkpoint

> **Domain:** [[_memory-state-moc|Memory & State]]

## 🎯 Motivation

A saved snapshot of the agent state at a specific point. Useful for rollback if something goes wrong.

## 📋 Concrete Example

Checkpoint before risky operation: {state: `pre_deployment`, files: [...], tests_passed: True}. If deployment fails, rollback to this checkpoint. The agent returns to a known-good state.

## 🔗 Analogy

Save points in a game - before a boss fight, you save. If you lose, you restart from the save point (checkpoint). Agent checkpoints allow safe rollback.

## Related Concepts

- [[state-serialization|State Serialization]]
- [[rollback|Rollback]]
- [[error-recovery|Error Recovery]]
