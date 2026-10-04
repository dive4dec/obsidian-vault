---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# Integration Security

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

External integrations widen the trust surface, so dsh keeps them bounded. MCP stdio entries merge only over a scrubbed ambient env; `dsh-web-fetch-http` rejects non-public destinations and binary data and never sends credentials; `dsh-webhook-github` verifies the signature with a secret resolved per request. External text from web results is labeled untrusted to the model.

## Concrete Example

A `dsh-webhook-github` route bounds and verifies GitHub's raw JSON body against `secretEnv` before dispatching, and `dsh-web-fetch-http` rejects non-public destinations and unsupported content types.

## Analogy

It is the checked bag and ID at the gate before an outside visitor may enter.

## Related Concepts

- [[webhook-github|GitHub Webhook]]
- [[web-fetch|Web Fetch]]
- [[mcp-config|MCP Config]]
