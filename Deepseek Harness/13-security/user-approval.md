---
tags: [DSH-Security]
domain: Security & Permissions
---

# User Approval

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

`dsh-user-approval` is the channel-neutral one-shot approval seam. Answerers are `approval/request` waterfall listeners: return an outcome to answer for an owned agent, or call `next()` to delegate. The service composes one terminal answerer and fails closed when none is present. The model-facing `dsh-client-ui-approval` plugin presents pending requests in the browser conversation composer; Enter approves, Escape rejects. Every request and outcome is logged as a `approval/asked` / `approval/decided` pair in the requesting session's audit log.

## Concrete Example

A browser approval panel takes over the Conversation composer with a focused detail region: Enter approves the pending `bash` escalation, Escape rejects it, and a withdrawn request cannot accept a late answer.

## Analogy

It is the receptionist at a hospital: the patient's (model's) request goes to the front desk (answerer), who either hands the chart to the right doctor or returns it unsigned.

## Related Concepts

- [[approval|Approval]]
- [[approval-policy|Approval Policy]]
- [[break-glass|Break Glass]]
- [[audit-log|Audit Log]]
