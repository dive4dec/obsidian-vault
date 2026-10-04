---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Image Offload

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

`dsh-compaction-image-offload` keeps image-heavy conversations going when older images exceed a model route's budget. It permanently replaces the offending images with text naming each attachment and its read-only path, then retries without spending the provider retry budget. Each decision appends one `image/offload` event, and later requests retain that choice across route changes, resume, and replay.

## Concrete Example

The plugin acts only on `IMAGE_OFFLOAD_REQUIRED` failures that carry `offloadImages`: it walks the surface in model request order, marks that many occurrences, and retries with a fresh `request/header`. Without it mounted, an over-image-budget request reaches ordinary recovery and ends the turn as an error.

## Analogy

Swapping the big photos out of a presentation for a caption that says "see attached file" so the slide still fits.

## Related Concepts

- [[compaction|Compaction]]
- [[token-meter|Token Meter]]
- [[attachment|Attachment]]
- [[overflow|Context Overflow]]
