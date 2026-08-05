---
tags: [Agent-Architectures]
domain: Agent Architectures
---

# Finite State Machine

> **Domain:** [[_agent-architectures-moc|Agent Architectures]]

## 🎯 Motivation

A model with a finite number of states, transitions between them, and actions associated with each state/transition. Useful for designing agent behavior.

## 📋 Concrete Example

FSM for a code agent: states={IDLE, READING, CODING, TESTING, DONE}, transitions={IDLE->READING (task received), READING->CODING (files read), CODING->TESTING (code written), TESTING->DONE (tests pass)}.

## 🔗 Analogy

A vending machine - states: waiting for money, money inserted, dispensing, done. Insert coin: waiting -> money inserted. Press button: money inserted -> dispensing. FSM gives agents predictable, testable behavior.

## Related Concepts

- [[state-machine-agent|State Machine Agent]]
- [[state-transition|State Transition]]
- [[deterministic-behavior|Deterministic Behavior]]
