---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# MCP Troubleshooting

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

MCP connections can fail or stall, and dsh is designed to degrade gracefully. If the initial connection fails, the harness still starts but no tools from that server appear and an error is logged; a slow or crashed server can delay startup or fail calls until recovery. Setting `failOnStartupError: true` instead rejects plugin activation. Reconnect behavior is tunable.

## Concrete Example

With a `github` server that won't start, no `mcp__github__*` tools appear and an error is logged; `reconnect.enabled` (default true) then retries with backoff from `reconnect.initialDelayMs` to `reconnect.maxDelayMs`.

## Analogy

It is a dead phone line — the call fails loudly, and the modem keeps redialing until the line comes back.

## Related Concepts

- [[mcp|MCP]]
- [[mcp-config|MCP Config]]
- [[mcp-limits|MCP Limits]]
