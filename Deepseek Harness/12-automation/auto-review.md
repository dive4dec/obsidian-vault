---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Auto Review

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

dsh-experimental-auto-review adds a model-judged Auto permission mode to Web profiles. Before each native or PTC inner tool call, the current agent's provider and model assess the pending action: an allowed call executes with Full access, and a denied call falls back to asking the user. It ships switched off because it can allow unsafe actions and spends extra tokens.

## Concrete Example

Install it into a Web profile with dsh plugin --profile web add, then select Auto review (badged EXP) in the composer or /permission picker; an explicit /permission auto command switches directly.

## Analogy

A second reader scanning every action before it happens: fast, opinionated, and occasionally wrong.

## Related Concepts

- [[approval-automation|Approval in Automation]]
- [[unattended|Unattended]]
- [[automation-security|Automation Security]]
- [[goal|Goal]]
