---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# Data Source

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

A data source is an external system the agent reads from to ground its answers. In dsh these arrive as MCP resources (read via `dsh-mcp-resources`), as web fetches (via `dsh-web-fetch-http`), or as structured search results (via `dsh-web-search-deepseek`). The common thread is that the content enters the conversation as data, and external text is labeled untrusted.

## Concrete Example

A model reads a document from a configured MCP server's resources, or fetches a public page via `ctx.web.fetch()`, and the text joins the session history.

## Analogy

It is a water tap the agent can open to fill its tank from the outside.

## Related Concepts

- [[resource|Resource]]
- [[web-fetch|Web Fetch]]
- [[connector|Connector]]
