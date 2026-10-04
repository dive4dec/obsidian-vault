---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Event

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

An event is the external occurrence that automation reacts to: a webhook delivery, a job settlement, a due schedule occurrence, or a goal round reaching idle. dsh-webhook snapshots and freezes each VerifiedWebhookDelivery before sharing it, and the job registry's event stream announces registration, progress, stopping, settlement, and removal.

## Concrete Example

A GitHub push reaches dsh-webhook-github as a delivery with X-GitHub-Event set, and a finished background job announces itself through the registry's settled event, which dsh-tool-jobs turns into an in-session notice.

## Analogy

A ping on the wall: anything can bang on it, and each listener decides whether it matters to them.

## Related Concepts

- [[trigger|Trigger]]
- [[webhook|Webhook]]
- [[job|Job]]
- [[schedule|Schedule]]
