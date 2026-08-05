---
tags: [Memory-&-Context]
domain: Memory & Context
---

# Session Search Tool

> **Domain:** [[_memory-context-moc|Memory & Context]]

## Motivation

A tool that lets the agent search past sessions by keyword. Finds relevant context from previous conversations without you having to remember session IDs.

## Concrete Example

Agent calls session_search(query=docker fix) and finds 3 past sessions where you fixed Docker issues. It reads them and uses the solutions to help you now.

## Analogy

A search bar in your email - instead of scrolling through hundreds of emails, you type docker and find the relevant ones. Session search finds past conversations by keyword.

## Related Concepts

- [[session-links|Session Links]]
- [[session-id|Session ID]]
- [[context-references|Context References]]
