---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Spill

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

`dsh-spill` is the spill storage service: plugins and tools save oversized text through the public `ctx.spillStore` API and get back an opaque locator, exact byte count, and retrieval guidance, so full results stay retrievable without filling model context. The package alone stores nothing — a backend such as `dsh-spill-local` provides the storage, and `dsh-spill-policy` decides when results become bounded previews.

## Concrete Example

Call `ctx.spillStore.saveText()` with an explicit owner; a save rejects on storage failure, leaving the caller to keep the content inline or fail.

## Analogy

Mailing out the bulk of a large document and keeping only a short reference number you can use to request it back.

## Related Concepts

- [[spill-policy|Spill Policy]]
- [[recall|Recall]]
- [[tool-message|Tool Message]]
- [[context-budget|Context Budget]]
