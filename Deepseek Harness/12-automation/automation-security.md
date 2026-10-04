---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Automation Security

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

Automation security is the discipline of letting unattended code act: webhook deliveries are labeled untrusted content for the model, HMAC signatures gate GitHub ingress and the secret is resolved per request, permission presets bound what a session may do, and the file sandbox policy bounds workflow and PTC runs.

## Concrete Example

The dsh-webhook-github route verifies X-Hub-Signature-256 before parsing the body and never logs the secret; a webhook rule's session request names an explicit permissionPreset the new session is created under.

## Analogy

Unmanned warehouse with cameras, locks, and badge rules: the robots are fast, but the gates are real.

## Related Concepts

- [[approval-automation|Approval in Automation]]
- [[webhook-github|GitHub Webhook]]
- [[auto-review|Auto Review]]
- [[unattended|Unattended]]
