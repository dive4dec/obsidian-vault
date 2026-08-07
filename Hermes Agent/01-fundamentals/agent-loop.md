---
tags: [Hermes-Fundamentals]
domain: Hermes Fundamentals
---

# Agent Loop

> **Domain:** [[_hermes-fundamentals-moc|Hermes Fundamentals]]

## Motivation

The agent loop is the heartbeat of Hermes. It goes: think, act, observe, repeat. Hermes receives your request, decides a tool to use, reads the result, then decides the next step until the task is done.

## Concrete Example

You ask Hermes to find the cheapest phone plan. It searches the web (act), reads the results (observe), compares prices (think), then answers. That is one full loop.

## Analogy

Like playing a turn-based game: you pick a move, see what happens, then plan your next move.

## Related Concepts

- [[autonomous-agent|Autonomous Agent]]
- [[tool-calling|Tool Calling]]
- [[max-turns|Max Turns]]
- [[hermes-acp-sdk|hermes-acp-sdk]]
- [[jupyter-ai-hermes|jupyter-ai-hermes]]
