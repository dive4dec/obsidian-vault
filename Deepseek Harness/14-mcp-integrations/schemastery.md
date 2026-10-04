---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# Schemastery

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

`schemastery` is a type-driven schema validator used as a supporting library across integrations. It is lightweight, lets any schema be used directly as a function or constructor, and supports advanced types such as `union`, `intersect`, and `transform`. Schemas can also be serialized to JSON and hydrated elsewhere, which suits configuration and data validation at integration boundaries.

## Concrete Example

`const validate = Schema.number().default(10)` validates and applies defaults; `Schema.object({...})` builds a typed config constructor with `.default()` values.

## Analogy

It is a set of rubber stamps that shape raw input into the exact form you need.

## Related Concepts

- [[cosmokit|Cosmokit]]
- [[cordis|Cordis]]
- [[integration|Integration]]
