---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# GitHub Integration

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

GitHub integration lets dsh act on GitHub from the agent side and react to GitHub from the event side. On the agent side, an MCP server such as `@modelcontextprotocol/server-github` exposes tools like `create_issue`. On the event side, `dsh-webhook-github` routes signed GitHub webhook deliveries into the webhook runtime to start new sessions.

## Concrete Example

Configure `serverName: github` with `args: ['-y', '@modelcontextprotocol/server-github']` in `dsh-mcp-client`, and call `mcp__github__create_issue` from a prompt; separately, `dsh-webhook-github` can turn a signed push event into a new Session.

## Analogy

It is a two-way street: the agent drives to GitHub with tools, and GitHub sends the agent signed postcards via webhooks.

## Related Concepts

- [[webhook-github|GitHub Webhook]]
- [[mcp|MCP]]
- [[webhook|Webhook]]
