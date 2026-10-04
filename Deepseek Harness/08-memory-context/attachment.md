---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Attachment

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

`dsh-attachment` provides durable image and file attachments that can be reused in prompts and commands. Attachments are the unit that `dsh-compaction-image-offload` later offloads when older images exceed a route's budget, replacing them with text naming the attachment and its read-only path.

## Concrete Example

An attached image is stored durably and referenced by path; if a route later rejects the request as over its image budget, `dsh-compaction-image-offload` marks the occurrence and retries.

## Analogy

A paperclip fastening a photo to your notes — it stays with the conversation and can be retrieved or moved later.

## Related Concepts

- [[attachment-local|Local Attachment]]
- [[client-file-upload|File Upload]]
- [[image-offload|Image Offload]]
- [[file-context|File Context]]
