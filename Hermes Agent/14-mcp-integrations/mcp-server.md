---
tags: [MCP-&-Integrations]
domain: MCP & Integrations
---

# MCP Server

> **Domain:** [[_mcp-integrations-moc|MCP & Integrations]]

## Motivation

An external program that provides tools to AI models via the MCP protocol. Can be local (stdio) or remote (HTTP).

## Concrete Example

filesystem MCP server: provides read_file, write_file, search tools. GitHub MCP server: provides create_issue, merge_pr tools. Each server specializes in a domain.

## Analogy

A vending machine - it dispenses specific items (tools) when you insert coins (requests). Each machine (server) has different items. Hermes can use multiple vending machines.

## Related Concepts

- [[mcp-overview|MCP Overview]]
- [[mcp-client|MCP Client]]
- [[stdio-transport|Stdio Transport]]
