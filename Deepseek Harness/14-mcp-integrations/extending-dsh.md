---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# Extending dsh

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

Extending dsh means giving the agent new capabilities without forking the runtime. The main levers are plugin packages mounted in a profile composition (via Cordis), MCP servers added through `dsh-mcp-client`, and hooks bridges that reuse existing `hooks.json`. Configuration, not code changes, is the usual path.

## Concrete Example

Mount `@deepseek-ai/dsh-office-to-pdf` as a `cordis.yml` row to add `ctx.officeToPdf.convert()`, or add a `dsh-mcp-client` entry to expose a server's tools as `mcp__<name>__<tool>`.

## Analogy

It is adding a room to a house through an extension kit rather than rebuilding the structure.

## Related Concepts

- [[plugin-integration|Plugin Integration]]
- [[integration|Integration]]
- [[mcp|MCP]]
