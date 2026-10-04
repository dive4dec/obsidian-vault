---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# MCP Package

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

The `@modelcontextprotocol` packages (such as `client` and `core`) are the official MCP SDK under `node_modules` that dsh builds on. `dsh-mcp-client` uses this SDK to select the protocol revision — preferring the latest and falling back to supported legacy revisions — and to own discovery pagination and its page limit.

## Concrete Example

The `@modelcontextprotocol/client` and `@modelcontextprotocol/core` packages resolve from `node_modules`, and `@modelcontextprotocol/server-github` is the stdio server a typical `dsh-mcp-client` entry launches.

## Analogy

It is the standardized socket and wiring spec that every MCP device is built against.

## Related Concepts

- [[mcp|MCP]]
- [[mcp-client|MCP Client]]
- [[mcp-server|MCP Server]]
