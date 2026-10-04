---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# MCP

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

Model Context Protocol (MCP) is the standard for letting an agent use tools, resources, and prompts from external servers. In dsh it is how you attach an outside service — a GitHub API, a database, a search backend — to the model's toolset without writing a native plugin. No MCP server is enabled by default; you configure one per entry in your profile.

## Concrete Example

The `@modelcontextprotocol` SDK packages (client and core) live under `node_modules`, and `dsh-mcp-client` bridges external servers so their tools register as `mcp__<serverName>__<rawName>` on `ctx.tools`.

## Analogy

MCP is the USB-C port for agent capabilities — any compliant device plugs in and shows up as a tool.

## Related Concepts

- [[mcp-client|MCP Client]]
- [[mcp-server|MCP Server]]
- [[mcp-tools|MCP Tools]]
- [[modelcontextprotocol|MCP Package]]
