---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# Cosmokit

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

`cosmokit` is a collection of common utilities used as supporting infrastructure for integrations. It provides `Volatile<T>` for immutable config data snapshots (`get()` and `createVolatile()`), `volatileEntries()` for enumerating references, and strict `deepEqual()` that treats volatile references, URLs, and cyclic structures correctly. These primitives keep shared state consistent across integration boundaries.

## Concrete Example

`createVolatile()` copies and freezes validated data, and `deepEqual()` treats two volatile references as equal regardless of their snapshots while distinguishing null from undefined recursively.

## Analogy

It is a toolbox of small, trusted parts — locks, hinges, and rulers — reused in every build.

## Related Concepts

- [[schemastery|Schemastery]]
- [[cordis|Cordis]]
- [[integration|Integration]]
