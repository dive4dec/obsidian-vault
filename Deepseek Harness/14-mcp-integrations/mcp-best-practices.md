---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# MCP Best Practices

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

Good MCP use keeps servers few, named, and stable. Give each server a unique `serverName` so its tools stay in a predictable namespace, scope servers to where they are actually needed, and keep tool names stable so history and permission rules survive restarts. Prefer a native plugin over a hooks bridge for behavior with no external counterpart.

## Concrete Example

Two servers both offering `search` coexist cleanly as `mcp__github__search` and `mcp__web__search` because each has its own `serverName`; two entries sharing one name fail to load.

## Analogy

It is labeling every drawer so you always know which tool lives where.

## Related Concepts

- [[mcp|MCP]]
- [[mcp-config|MCP Config]]
- [[mcp-limits|MCP Limits]]
