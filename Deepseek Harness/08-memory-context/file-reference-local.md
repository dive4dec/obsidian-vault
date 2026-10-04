---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Local File Reference

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

`dsh-file-reference-local` is the local-workspace `@file` completion provider for `ctx.fileReferences` discovery. It resolves `@file` mentions against files that exist in the local workspace so users can reference them without typing full paths.

## Concrete Example

As the user types `@` in the composer, `dsh-file-reference-local` offers matching local files from the workspace for completion.

## Analogy

Autocomplete in a text field that only suggests files that actually exist in your folder.

## Related Concepts

- [[file-reference|File Reference]]
- [[file-context|File Context]]
- [[workspace-context|Workspace Context]]
