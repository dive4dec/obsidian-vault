---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# Adapter

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

An adapter translates one specific external system's wire format into dsh's provider-neutral shape. `dsh-webhook-github` is the canonical example: it bounds and verifies GitHub's signed body, projects a provider-neutral delivery, and hands it to `ctx.webhookRuntime.dispatch()`. Provider authentication stays inside the adapter, while the runtime stays generic.

## Concrete Example

`dsh-webhook-github` registers one exact HTTP route, verifies the GitHub signature via `secretEnv`, and projects a neutral `VerifiedWebhookDelivery` for the webhook runtime.

## Analogy

It is a plug converter that turns a foreign outlet into your local standard.

## Related Concepts

- [[webhook-github|GitHub Webhook]]
- [[connector|Connector]]
- [[integration|Integration]]
