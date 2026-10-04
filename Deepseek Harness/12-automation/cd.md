---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# CD

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

Continuous deployment extends the same pattern: after CI passes, a headless run performs the deploy-side work — or a webhook from the platform kicks off a review session. The exit code is the contract the deploy pipeline can rely on.

## Concrete Example

dsh --profile headless "bump and publish" runs as the deploy step, and a dsh-webhook-github route can open a review session when a release tag is pushed.

## Analogy

The forklift at the end of the line: it only moves what the line has already stamped good.

## Related Concepts

- [[ci|CI]]
- [[webhook|Webhook]]
- [[pipeline-automation|Pipeline Automation]]
- [[headless|Headless]]
