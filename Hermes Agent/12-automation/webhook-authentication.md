---
tags: [Automation-&-Scheduling]
domain: Automation & Scheduling
---

# Webhook Authentication

> **Domain:** [[_automation-scheduling-moc|Automation & Scheduling]]

## Motivation

Webhooks can require a secret token so only authorized senders can trigger Hermes.

## Concrete Example

GitHub includes a secret hash in the webhook. Hermes checks it before processing, rejecting fakes.

## Analogy

Like a secret handshake: only people who know it can get in.

## Related Concepts

- [[webhooks|webhooks]]
- [[hermes-webhook-subscribe|hermes webhook subscribe]]
- [[webhook-routes|webhook routes]]
