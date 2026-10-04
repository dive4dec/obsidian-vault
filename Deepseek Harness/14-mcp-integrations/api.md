---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# External API

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

Calling an external API is the most basic form of integration: the agent requests data or an action from a remote HTTP service. In dsh these calls go through Node's `fetch`, which `dsh-http-proxy` routes through one outbound proxy policy. Credentials and timeouts are deployment concerns rather than model arguments, and external response text is labeled untrusted.

## Concrete Example

A DeepSeek web search resolves through the Anthropic-compatible Messages API behind `ctx.web.search()`, with `DEEPSEEK_API_KEY` or account sign-in as the credential.

## Analogy

It is dialing a number on a phone to ask another building for a fact.

## Related Concepts

- [[http-proxy|HTTP Proxy]]
- [[connector|Connector]]
- [[data-source|Data Source]]
