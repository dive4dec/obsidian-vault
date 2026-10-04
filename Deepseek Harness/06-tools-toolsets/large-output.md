---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Large Output

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

Large output is any tool result too big to inline: dsh caps it, and with a spill store the complete data is written to disk so it remains fully recoverable. Spilled results come back as an opaque locator, exact byte count, and retrieval guidance instead of the raw payload. The compaction tool-result pruner and spill policy decide when oversized results become bounded previews.

## Concrete Example

A grep result over the cap keeps its full sorted list in the spill artifact; the model gets the path and byte count to recall it.

## Analogy

A receipt: the summary on the card, the full record in the drawer.

## Related Concepts

- [[spilling|Spill]]
- [[tool-output|Tool Output]]
- [[present-tool|Present Tool]]
- [[fs-search-tool|FS Search Tool]]
