---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Local Attachment

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

`dsh-attachment-local` is the local storage backend for `dsh-attachment`, keeping attached images below `$DSH_HOME`. It is the on-disk store that makes attachments durable and reusable across prompts.

## Concrete Example

When you attach an image, `dsh-attachment-local` persists it under `$DSH_HOME` so later turns and replays can reference the same stored file.

## Analogy

A photo album that stores the pictures so you can flip back to the same one whenever you need it.

## Related Concepts

- [[attachment|Attachment]]
- [[client-file-upload|File Upload]]
- [[file-reference-local|Local File Reference]]
