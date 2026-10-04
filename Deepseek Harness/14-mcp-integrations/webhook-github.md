---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# GitHub Webhook

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

`dsh-webhook-github` is a signed GitHub webhook adapter that registers one exact HTTP route on the injected `ctx.webServer`. It bounds and verifies GitHub's raw JSON body using the configured secret, projects a provider-neutral delivery, calls `ctx.webhookRuntime.dispatch()`, and returns `202` without waiting for rules or Sessions. The secret is resolved per request, so rotation takes effect on the next delivery.

## Concrete Example

Configure `source: primary-github`, a `path`, a `secretEnv` credential reference, and a `maxBodyBytes` ceiling; only a signed POST to that path is accepted.

## Analogy

It is a front desk that checks a guest's signed invitation before passing the message along.

## Related Concepts

- [[webhook|Webhook]]
- [[github|GitHub Integration]]
- [[automation-hook|Automation Hook]]
