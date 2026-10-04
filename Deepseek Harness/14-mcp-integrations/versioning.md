---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# Integration Versioning

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

Integrations evolve independently of the harness, so version compatibility matters. For MCP, the official SDK selects the newest supported protocol revision and falls back to legacy revisions; tool names stay stable while a server keeps the same tool name, so history and permission rules survive. Office conversion reports an engine/generation that changes on configuration replacement.

## Concrete Example

`dsh-mcp-client` uses the official SDK to select the 2026-07-28 protocol when available and fall back to supported legacy revisions; `libreoffice-kit` exposes `ENGINE_VERSION` and `ENGINE_VERSIONS` for compatible engines.

## Analogy

It is keeping the socket and the plug from drifting out of shape with each other.

## Related Concepts

- [[mcp|MCP]]
- [[libreoffice|LibreOffice Kit]]
- [[mcp-best-practices|MCP Best Practices]]
