---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# Resource

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

A resource is a document or piece of data an MCP server exposes for reading, as opposed to a tool that performs an action. In dsh, `dsh-mcp-resources` lets the model discover and read these on demand, with each tool requiring an explicit server name and reading content only when called. Resource text enters conversation history; binary payloads remain available to programmatic callers.

## Concrete Example

A configured GitHub server's documents are read by name through the shared resource tools that shipped profiles mount automatically.

## Analogy

It is a document on a shelf you may borrow to read, not a lever you pull.

## Related Concepts

- [[mcp-resources|MCP Resources]]
- [[mcp|MCP]]
- [[mcp-client|MCP Client]]
