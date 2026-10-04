---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# MCP Config

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

MCP config is where you declare each external server in a profile's `cordis.yml` row for `dsh-mcp-client`. You set a unique `serverName`, the `transport` (`stdio` or `streamable-http`), and the connection details plus behavior knobs like timeouts and reconnect. This is the only place you wire a server into the model's toolset.

## Concrete Example

A config row with `serverName: github`, `transport: stdio`, `command: npx`, `args: ['-y', '@modelcontextprotocol/server-github']`, and `toolCallTimeoutMs: 60000` brings the GitHub server online.

## Analogy

It is the phone book entry that tells the agent who to call and how to reach them.

## Related Concepts

- [[mcp-client|MCP Client]]
- [[mcp|MCP]]
- [[mcp-troubleshoot|MCP Troubleshooting]]
