---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# Webhook

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

`dsh-webhook` provides the Host `ctx.webhookRuntime`: a registry for trusted programmatic webhook rules plus one built-in action — creating an ordinary root Session inside a Web Workspace. The interface stays at `register(rule)` and `dispatch(delivery)`, while provider authentication belongs to adapter packages like `dsh-webhook-github`. Use it when a trusted rule must turn an external event into a new agent Session.

## Concrete Example

A `WebhookRule` with a unique `id`, a provider `kind`, and a `run(delivery, signal)` callback returns a `WebhookSessionRequest` to start a new Session from a delivery.

## Analogy

It is a switchboard that turns an incoming knock into a new room being opened.

## Related Concepts

- [[webhook-github|GitHub Webhook]]
- [[automation-hook|Automation Hook]]
- [[github|GitHub Integration]]
