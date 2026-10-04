---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Alerting

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

Alerting is the push direction of the same pattern: an external event (a GitHub webhook, an alerting system's call) triggers a session instead of a clock. dsh-webhook-github verifies the signature, dispatches the delivery, and a rule opens a session whose prompt carries the alert payload.

## Concrete Example

A GitHub push to the protected branch reaches the dsh-webhook-github route, and the rule creates a session titled with the PR number whose prompt asks the agent to review the diff.

## Analogy

Smoke alarm instead of round-the-clock checking: someone yells only when something actually happened.

## Related Concepts

- [[webhook|Webhook]]
- [[event|Event]]
- [[monitoring|Monitoring]]
- [[trigger|Trigger]]
