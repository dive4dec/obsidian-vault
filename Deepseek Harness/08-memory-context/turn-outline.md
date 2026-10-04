---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Turn Outline

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

`dsh-session-turn-outline` provides a whole-log turn outline as a projection unit, behind full-session turn navigation. It summarizes the structure of a session's turns so a client can offer navigation without loading every message in full.

## Concrete Example

The `turnOutline` projection unit folds the whole log into an outline of turns that the session UI uses for full-session turn navigation.

## Analogy

The table of contents of a book — a compact map of the chapters without the full text of each.

## Related Concepts

- [[context-projection|Context Projection]]
- [[chunked-list|Chunked List]]
- [[context-cache|Context Cache]]
