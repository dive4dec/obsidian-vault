---
tags: [Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Tool Result Truncation

> **Domain:** [[_tools-toolsets-moc|Tools & Toolsets]]

## Motivation

When tool output is too long, it is truncated to fit in context. The model sees a summary instead of full output.

## Concrete Example

terminal output: 50,000 lines. Too long. Truncated to: first 100 lines + ... + last 100 lines (500 lines total). Fits in context.

## Analogy

A summary of a long book - instead of reading 500 pages, you read a 5-page summary. Tool result truncation summarizes long outputs.

## Related Concepts

- [[toolsets|Toolsets]]
- [[context-window|Context Window]]
- [[context-compression|Context Compression]]
