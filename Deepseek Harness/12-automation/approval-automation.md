---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Approval in Automation

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

Approvals are a problem for automation because the ask policy needs a human to answer. The unattended answers are to pick permission presets that allow the work up front, or to use dsh-experimental-auto-review, where the model assesses each pending tool call and only denied calls fall back to asking.

## Concrete Example

Selecting Auto review (badged EXP) in the /permission picker makes allowed calls execute with Full access automatically; a headless run under a permissive preset never stops to ask at all.

## Analogy

Pre-authorization at a border: you waved through at the kiosk, so no officer is needed per bag.

## Related Concepts

- [[unattended|Unattended]]
- [[auto-review|Auto Review]]
- [[automation-security|Automation Security]]
- [[headless|Headless]]
