---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# MCP Tools

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

MCP tools are the callable capabilities an external server exposes to the agent. Each is registered under a stable, server-qualified name so session history and permission rules survive restarts and reloads. Two servers can both offer a tool named `search` and coexist under their own namespaces.

## Concrete Example

From a `github` server, `create_issue` registers as `mcp__github__create_issue`; from a second `web` server, the same raw name stays `mcp__web__search`.

## Analogy

Each is a labeled button on a remote, namespaced so two remotes never collide.

## Related Concepts

- [[mcp|MCP]]
- [[mcp-client|MCP Client]]
- [[mcp-server|MCP Server]]
