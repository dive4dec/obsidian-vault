---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# MCP Client

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

`dsh-mcp-client` is the bridge that lets the model call tools and resources from external MCP servers as if they were native. You give each server a unique name and transport (`stdio` or `streamable-http`), and its tools register on `ctx.tools` under stable names. An empty caller scope adds no MCP tools or prompt text, so you only see what you configure.

## Concrete Example

In a profile `cordis.yml` row you set `name: '@deepseek-ai/dsh-mcp-client'` with `serverName: github`, `transport: stdio`, `command: npx`, and `args: ['-y', '@modelcontextprotocol/server-github']`; the server's tools then appear as `mcp__github__create_issue`.

## Analogy

It is a translator you place at the door so a foreign service can speak the agent's tool language.

## Related Concepts

- [[mcp|MCP]]
- [[mcp-config|MCP Config]]
- [[mcp-tools|MCP Tools]]
- [[mcp-troubleshoot|MCP Troubleshooting]]
