---
tags: [MCP-&-Integrations]
domain: MCP & Integrations
---

# MCP Test

> **Domain:** [[_mcp-integrations-moc|MCP & Integrations]]

## Motivation

Testing connection to an MCP server. Command: hermes mcp test NAME. Verifies the server is reachable and tools are discovered.

## Concrete Example

hermes mcp test github. Output: Connecting... Connected. Tools found: create_issue, merge_pr, list_repos (3 tools). Connection successful.

## Analogy

Ping-testing a website - you send a ping and see if it responds. hermes mcp test checks if an MCP server is alive and what tools it offers.

## Related Concepts

- [[mcp-server|MCP Server]]
- [[mcp-list|MCP List]]
- [[mcp-client|MCP Client]]
