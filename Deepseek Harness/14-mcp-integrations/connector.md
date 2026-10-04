---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# Connector

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

A connector is the configured link between dsh and a specific service — the MCP client entry for a server, the webhook adapter route for GitHub, or the web provider for search and fetch. It is the concrete, named piece of an integration: unique inside its scope, with its own transport, credentials, and limits.

## Concrete Example

A `dsh-mcp-client` row with `serverName: github` and a `stdio` transport is a connector; a `dsh-webhook-github` route with `source: primary-github` is another.

## Analogy

It is a single named cable running from the house to one specific appliance.

## Related Concepts

- [[adapter|Adapter]]
- [[mcp-config|MCP Config]]
- [[data-source|Data Source]]
