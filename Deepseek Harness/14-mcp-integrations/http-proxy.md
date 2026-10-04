---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# HTTP Proxy

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

`dsh-http-proxy` applies one outbound HTTP proxy policy to all harness requests that use Node's built-in `fetch`, including LLM, web-search, and HTTP MCP traffic. The launcher reads standard proxy environment variables once and installs the policy before the first plugin loads, so ordinary `fetch` callers need no extra imports. Local loopback traffic stays direct, and unsupported proxy URLs are reported and skipped for that scheme.

## Concrete Example

A user who exports `HTTPS_PROXY` is proxied everywhere with nothing to mount or configure; the `dsh` launcher resolves and installs the policy for every profile before plugins load.

## Analogy

It is a single front door through which every letter in the house must pass, set once for everyone.

## Related Concepts

- [[web|Web]]
- [[web-fetch|Web Fetch]]
- [[web-search-deepseek|DeepSeek Web Search]]
