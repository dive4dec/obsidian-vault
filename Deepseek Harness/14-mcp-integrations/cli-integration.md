---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# CLI Integration

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

CLI integration uses an external command-line program as the agent's tool, typically through the bash tool. This is the lowest-friction way to reach an existing program — no server or plugin required — because the agent can invoke the binary directly and read its output. Many integrations are simply well-known CLIs called through the shell.

## Concrete Example

Running `git` through the bash tool, or launching `npx -y @modelcontextprotocol/server-github` as the `command`/`args` of a `stdio` MCP server, are both command-based integrations.

## Analogy

It is picking up a physical tool from the drawer and using it by hand.

## Related Concepts

- [[mcp-server|MCP Server]]
- [[integration|Integration]]
- [[adapter|Adapter]]
