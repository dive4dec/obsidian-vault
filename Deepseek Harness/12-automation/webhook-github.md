---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# GitHub Webhook

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

dsh-webhook-github is the signed GitHub ingress adapter for the webhook runtime. It registers one exact HTTP route on the injected ctx.webServer, bounds and verifies the raw JSON body, projects a provider-neutral delivery, calls ctx.webhookRuntime.dispatch(), and returns 202 without waiting for rules or sessions.

## Concrete Example

Configuration requires source, path, secretEnv, and maxBodyBytes; the adapter verifies X-Hub-Signature-256 HMAC before parsing JSON, and secret rotation takes effect on the next delivery without reloading the plugin.

## Analogy

An ID-checking doorman: the signature is checked first, the message is passed along second, and the doorman waves you in with a 202.

## Related Concepts

- [[webhook|Webhook]]
- [[event|Event]]
- [[trigger|Trigger]]
- [[ci|CI]]
