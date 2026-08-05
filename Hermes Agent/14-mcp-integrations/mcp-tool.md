---
tags: [MCP-&-Integrations]
domain: MCP & Integrations
---

# MCP Tool

> **Domain:** [[_mcp-integrations-moc|MCP & Integrations]]

## Motivation

A tool provided by an MCP server. Behaves identically to built-in tools once registered.

## Concrete Example

GitHub MCP server provides create_issue tool. Hermes model calls: create_issue(title=Bug, body=Crash). The MCP server creates the issue on GitHub. Returns: Issue #42 created.

## Analogy

A power tool attachment - you attach a drill bit (MCP tool) to your drill (Hermes). Now you can drill holes. Different attachments do different things. MCP tools are attachments for Hermes.

## Related Concepts

- [[mcp-server|MCP Server]]
- [[mcp-client|MCP Client]]
- [[tool-calling|Tool Calling]]
