---
tags: [Agent-Architectures]
domain: Agent Architectures
---

# State Machine Agent

> **Domain:** [[_agent-architectures-moc|Agent Architectures]]

## 🎯 Motivation

The agent operates as a state machine: it has defined states, and transitions between them based on conditions.

## 📋 Concrete Example

States: IDLE -> RESEARCHING -> CODING -> TESTING -> DONE. Transitions: IDLE + new_task -> RESEARCHING. RESEARCHING + info_found -> CODING. CODING + code_ready -> TESTING. TESTING + tests_pass -> DONE.

## 🔗 Analogy

A washing machine - states: fill, wash, rinse, spin, done. It transitions based on conditions (water level, timer). State machine agents work the same way: defined states, condition-based transitions.

## Related Concepts

- [[agent-architecture|Agent Architecture]]
- [[state-transition|State Transition]]
- [[finite-state-machine|Finite State Machine]]
