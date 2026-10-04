---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Tool Output

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

Tool output is captured and bounded before it reaches the model: fs results are capped with pagination footers, persistent bash retains maxOutputChars (default 16,000), and search results honor configurable caps. Large output that must stay retrievable is spilled to disk via dsh-spill, leaving a locator plus exact byte count in context. This keeps the context window from being flooded by one chatty command.

## Concrete Example

job_output renders stdout first then a single [stderr] section, notes output that left memory before the read, and ends with [status: ...].

## Analogy

A page printer that shows one page at a time and files the rest.

## Related Concepts

- [[large-output|Large Output]]
- [[spilling|Spill]]
- [[tool-result|Tool Result]]
- [[bash-persistent|Persistent Bash]]
