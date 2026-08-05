---
tags: [CLI-&-Commands]
domain: CLI & Commands
---

# Hermes MCP

> **Domain:** [[_cli-commands-moc|CLI & Commands]]

## Motivation

The hermes mcp command group manages MCP servers. Subcommands include serve, add, remove, list, test, and configure. MCP servers add external tools to Hermes.

## Concrete Example

You run hermes mcp add google-drive --url .... Then hermes mcp test google-drive confirms it works. Hermes can now read your Drive files.

## Analogy

Like adding a new appliance to your smart home. Plug it in, test the connection, configure settings.

## Related Concepts

- [[mcp-servers|MCP Servers]]
- [[plugins|Plugins]]
- [[toolsets|Toolsets]]
