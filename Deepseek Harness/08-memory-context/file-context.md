---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# File Context

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

The referenced files brought into the model's context for a task. `dsh-file-reference` discovers `@file` mention grammar, `dsh-file-reference-local` resolves `@file` completions against the local workspace, and `dsh-attachment` provides durable attachments — all ways to get a specific file's content in front of the model.

## Concrete Example

`dsh-file-reference-local` provides local-workspace `@file` completion for `ctx.fileReferences` discovery, so typing `@` suggests files that can then be read into context.

## Analogy

Highlighting the exact paragraphs you need from a book and pinning them to your note — only the relevant pages are in front of you.

## Related Concepts

- [[workspace-context|Workspace Context]]
- [[file-reference|File Reference]]
- [[attachment|Attachment]]
- [[instructions|Instructions]]
