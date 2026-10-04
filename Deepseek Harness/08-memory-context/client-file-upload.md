---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# File Upload

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

`dsh-client-file-upload` provides session-addressed browser file uploads with streaming intake, progress, cancellation, and staged receipts for later prompts. It is the client-side path by which files become durable attachments the agent can use.

## Concrete Example

Dragging a file into the composer starts a streamed upload that reports progress and produces a staged receipt that a later prompt can reference.

## Analogy

A front-desk check-in where your item is logged, given a ticket, and set aside for you to claim later.

## Related Concepts

- [[attachment|Attachment]]
- [[attachment-local|Local Attachment]]
- [[file-reference|File Reference]]
