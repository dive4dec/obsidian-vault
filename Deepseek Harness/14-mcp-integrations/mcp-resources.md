---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# MCP Resources

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

`dsh-mcp-resources` lets the model discover and read documents from configured MCP servers. Shipped profiles mount its three shared tools automatically once a server is in the caller's scope, and each tool requires an explicit server name and reads content only when called. Resource text enters conversation history, while binary payloads stay available to programmatic callers.

## Concrete Example

With a GitHub server configured in `dsh-mcp-client`, the model can list and read that server's resources by name through the shared resource tools — no separate resource configuration is needed.

## Analogy

It is a reading room where you must name the shelf before anything is handed to you.

## Related Concepts

- [[mcp-client|MCP Client]]
- [[mcp|MCP]]
- [[resource|Resource]]
