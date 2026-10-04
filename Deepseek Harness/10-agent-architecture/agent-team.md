---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Agent Team

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

Agent Teams turns one coding session into a small working team: the session's agent becomes the Lead, creates named teammates, exchanges durable messages with them, and tracks shared tasks on a common board. Messages and task state survive crashes, reloads, and interruptions, so an offline teammate receives queued messages on resume. It provides no tools of its own — mount the sibling tool package so the model can create and message teammates.

## Concrete Example

`dsh-experimental-agent-team` is published under its experimental name with no stability promise and needs durable session storage to activate.

## Analogy

A scrum where a lead, named teammates, and a shared task board keep state across hiccups.

## Related Concepts

- [[team-profile|Team Profile]]
- [[concurrent-agents|Concurrent Agents]]
- [[subagent|Subagent]]
- [[agent-delegation|Delegation]]
