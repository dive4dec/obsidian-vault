---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# MCP Limits

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

MCP integration is bounded by deliberate caps so a slow or hostile server cannot hang the run. `dsh-mcp-client` sets `toolCallTimeoutMs` (default 60,000) per tool call or resource request and `maxInstructionBytes` (default 32,768) for server instructions, rejecting an oversized value. An empty caller scope adds no tools or prompt text, and the SDK owns discovery pagination and its page limit.

## Concrete Example

A server whose instructions exceed `maxInstructionBytes: 32768` is rejected at connection; each `tools/call` is bounded by `toolCallTimeoutMs: 60000`.

## Analogy

It is a fuse on every line so one misbehaving socket can't brown out the whole house.

## Related Concepts

- [[mcp-config|MCP Config]]
- [[mcp-client|MCP Client]]
- [[mcp-best-practices|MCP Best Practices]]
