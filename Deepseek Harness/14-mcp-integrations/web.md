---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# Web

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

`dsh-web` is the web access service exposed as `ctx.web`, letting plugins and tools search the web or fetch a URL without tying to a specific vendor. It selects a usable backend for each operation and gives callers consistent cancellation, errors, and result limits. It does not make network requests on its own — it needs at least one configured search and/or fetch provider.

## Concrete Example

A composition loads the `dsh-web` service and mounts `dsh-web-search-deepseek` and `dsh-web-fetch-http`, after which `dsh-tool-web` callers use `ctx.web.search()` and `ctx.web.fetch()` directly.

## Analogy

It is a dispatcher that routes each request to the right courier without the caller knowing the courier's name.

## Related Concepts

- [[web-search|Web Search]]
- [[web-fetch|Web Fetch]]
- [[http-proxy|HTTP Proxy]]
