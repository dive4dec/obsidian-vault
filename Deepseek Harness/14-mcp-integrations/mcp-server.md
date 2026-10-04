---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# MCP Server

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

An MCP server is the external process or endpoint that exposes tools, resources, and prompts to a dsh agent. Each server you configure in the MCP client gets a namespace, and its capabilities show up in the model's toolset. You run one over `stdio` (a local command like `npx ...`) or `streamable-http` (a URL).

## Concrete Example

`@modelcontextprotocol/server-github` launched via `npx -y` over `stdio` is a typical MCP server; its `create_issue` tool then surfaces as `mcp__github__create_issue`.

## Analogy

It is a shop across the street that sells you tools by the name you agreed on.

## Related Concepts

- [[mcp|MCP]]
- [[mcp-client|MCP Client]]
- [[mcp-tools|MCP Tools]]
