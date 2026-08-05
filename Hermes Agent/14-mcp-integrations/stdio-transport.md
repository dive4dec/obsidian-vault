---
tags: [MCP-&-Integrations]
domain: MCP & Integrations
---

# Stdio Transport

> **Domain:** [[_mcp-integrations-moc|MCP & Integrations]]

## Motivation

MCP servers that communicate via standard input/output (stdin/stdout). Run as local subprocesses.

## Concrete Example

hermes mcp add filesystem --command npx @modelcontextprotocol/server-filesystem. The server runs as a subprocess. Hermes communicates via stdin/stdout. Fast, local, no network.

## Analogy

A direct phone line - you pick up the phone and the other person is right there. No dialing, no network. Stdio transport is a direct connection to a local server.

## Related Concepts

- [[mcp-server|MCP Server]]
- [[http-transport|HTTP Transport]]
- [[mcp-client|MCP Client]]
