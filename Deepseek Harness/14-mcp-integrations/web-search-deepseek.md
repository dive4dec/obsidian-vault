---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# DeepSeek Web Search

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

`dsh-web-search-deepseek` is the DeepSeek-backed search provider for `ctx.web`. It uses DeepSeek account sign-in or an existing `DEEPSEEK_API_KEY` to search through DeepSeek's native search, returning results from the structured search blocks DeepSeek provides rather than scraping reply text. Because DeepSeek has no dedicated search endpoint, one search costs a full model turn in latency and tokens.

## Concrete Example

Mount it in a composition that loads the web service and it registers as the `deepseek-official` provider, so `ctx.web.search()` uses it; the model-facing `web_search` tool lives in `dsh-tool-web`.

## Analogy

It is a paid research assistant: each question costs a full consultation, not a quick lookup.

## Related Concepts

- [[web-search|Web Search]]
- [[web|Web]]
- [[http-proxy|HTTP Proxy]]
