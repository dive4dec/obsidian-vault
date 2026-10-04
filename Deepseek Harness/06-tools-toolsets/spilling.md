---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Spill

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

dsh-spill lets plugins and tools save oversized text through the public ctx.spillStore API and receive an opaque locator, exact byte count, and retrieval guidance. Choose it when full results must remain retrievable without filling model context. dsh-spill-local provides local persistence and dsh-spill-policy turns oversized tool results into bounded previews; the API offers no retention, replacement, retrieval, or search operations.

## Concrete Example

dsh-tool-fs-search with @deepseek-ai/dsh-spill-local composed keeps the complete capped glob list in the spill artifact.

## Analogy

Parking an oversized suitcase in luggage storage and keeping the ticket.

## Related Concepts

- [[large-output|Large Output]]
- [[tool-output|Tool Output]]
- [[fs-search-tool|FS Search Tool]]
