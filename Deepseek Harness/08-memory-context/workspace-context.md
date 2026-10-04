---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Workspace Context

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

The workspace files and instruction files relevant to the current task. `dsh-agent-instructions` loads the applicable `AGENTS.md` chain from the project root down to the working directory, and `dsh-file-reference` discovers `@file` mentions so the referenced files can be brought into context. Together they ground the agent in the actual working directory.

## Concrete Example

`dsh-agent-instructions` includes every existing instruction candidate from the project root down to the session working directory, broad-to-specific, on the first request.

## Analogy

The set of documents and rules you pin up for the specific project you're working on right now.

## Related Concepts

- [[file-context|File Context]]
- [[instructions|Instructions]]
- [[file-reference|File Reference]]
