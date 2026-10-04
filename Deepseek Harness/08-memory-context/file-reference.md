---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# File Reference

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

`dsh-file-reference` provides file-reference discovery and the `@file` mention grammar for host-backed UIs. It defines how a user names a path in a message and how that path is discovered so its content can be read into context, paired with a provider such as `dsh-file-reference-local`.

## Concrete Example

A user types `@README.md` in a message; `dsh-file-reference` parses the mention grammar and the paired provider resolves it to a real file the agent can then read.

## Analogy

Footnote references in an essay — a small marker pointing at the full source you can open.

## Related Concepts

- [[file-reference-local|Local File Reference]]
- [[file-context|File Context]]
- [[attachment|Attachment]]
