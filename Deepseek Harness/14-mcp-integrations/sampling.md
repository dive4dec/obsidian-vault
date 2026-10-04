---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# MCP Sampling

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

MCP sampling is the protocol capability where a server asks the client to run a model on its behalf. In dsh the MCP surface is oriented toward tools and resources that register on `ctx.tools`; the client bridge focuses on connecting servers and exposing their tools and resources rather than acting as a sampling host for them.

## Concrete Example

`dsh-mcp-client` connects a server and exposes its tools as `mcp__<serverName>__<rawName>` and its resources through `dsh-mcp-resources`; it does not advertise a sampling host for the server to call back into.

## Analogy

It is the reverse of a tool call — the server wanting to ask your model, rather than you asking the server.

## Related Concepts

- [[mcp|MCP]]
- [[mcp-tools|MCP Tools]]
- [[mcp-client|MCP Client]]
