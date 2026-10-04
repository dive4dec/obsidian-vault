---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Context Overflow

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

What happens when context exceeds the model's window. `dsh-compaction-basic` treats a confirmed context-overflow error as a recovery trigger: it condenses the oldest history and retries the request. For image-heavy routes, `dsh-compaction-image-offload` handles the over-image-budget case by offloading images and retrying without spending the provider retry budget.

## Concrete Example

After a confirmed overflow error, `dsh-compaction-basic` condenses and retries; the `IMAGE_OFFLOAD_REQUIRED` failure carries `offloadImages` that `dsh-compaction-image-offload` acts on before retrying.

## Analogy

A car that runs low on fuel, pulls over to refuel (summarize and offload), then gets back on the road.

## Related Concepts

- [[context-limit|Context Limit]]
- [[compaction-basic|Basic Compaction]]
- [[refill|Context Refill]]
- [[image-offload|Image Offload]]
