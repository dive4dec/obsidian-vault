---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# Web Fetch

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

Web fetch retrieves the public content of a URL through the web service. The model-facing `web_fetch` tool lives in `dsh-tool-web` and renders the provider's bodies, while the default anonymous backend `dsh-web-fetch-http` handles safe retrieval with URL validation, same-origin redirects, and byte/character caps. Non-2xx responses come back as results rather than errors, and binary data is rejected.

## Concrete Example

Mount `dsh-web-fetch-http` and it registers as the `http` fetch provider, so `ctx.web.fetch()` resolves it automatically and returns the status code plus bounded, decoded content.

## Analogy

It is a cautious courier who only opens sealed, same-road deliveries and hands back the contents as-is.

## Related Concepts

- [[web|Web]]
- [[web-search|Web Search]]
- [[http-proxy|HTTP Proxy]]
