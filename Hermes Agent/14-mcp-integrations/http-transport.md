---
tags: [MCP-&-Integrations]
domain: MCP & Integrations
---

# HTTP Transport

> **Domain:** [[_mcp-integrations-moc|MCP & Integrations]]

## Motivation

MCP servers that communicate over HTTP. Can be remote. Useful for cloud-hosted tools.

## Concrete Example

hermes mcp add weather --url https://mcp.weather.com/sse. Hermes connects over the internet. The server can be anywhere in the world. Tools are accessed remotely.

## Analogy

A video call - you connect to someone over the internet. They can be anywhere. HTTP transport connects Hermes to remote MCP servers.

## Related Concepts

- [[mcp-server|MCP Server]]
- [[stdio-transport|Stdio Transport]]
- [[mcp-client|MCP Client]]
