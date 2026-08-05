---
tags: [Memory-&-Context]
domain: Memory & Context
---

# Memory Enabled

> **Domain:** [[_memory-context-moc|Memory & Context]]

## Motivation

A setting that turns persistent memory on or off. When enabled, the agent saves and recalls facts across sessions. When off, each session is a blank slate.

## Concrete Example

memory_enabled: true in config. The agent now saves what it learns about you. Set it to false for a one-off session where you want total privacy and no remembering.

## Analogy

The remember passwords checkbox in a browser - check it to save (enabled), uncheck to forget each time (disabled). Memory enabled controls whether the agent remembers.

## Related Concepts

- [[persistent-memory|Persistent Memory]]
- [[memory-provider|Memory Provider]]
- [[memory-setup|Memory Setup]]
