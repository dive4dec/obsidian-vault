---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# Web Search

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

Web search is the capability that lets the model look up current information on the web. In dsh the `web_search` tool lives in `dsh-tool-web` and resolves to a configured search provider behind `ctx.web.search()`, so the model is never tied to a specific vendor. A search needs a configured, usable provider because the web service does not make network requests on its own.

## Concrete Example

With `dsh-web-search-deepseek` mounted, `ctx.web.search()` resolves the `deepseek-official` provider, and the model-facing `web_search` tool in `dsh-tool-web` calls it.

## Analogy

It is a librarian the model can ask, without the model needing to know which library it is.

## Related Concepts

- [[web-search-deepseek|DeepSeek Web Search]]
- [[web|Web]]
- [[web-fetch|Web Fetch]]
