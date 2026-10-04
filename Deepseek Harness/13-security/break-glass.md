---
tags: [DSH-Security]
domain: Security & Permissions
---

# Break Glass

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

Break glass is the act of escalating access with approval when the standing policy is insufficient. In dsh, the escalation ladder is closed: `read-only` may escalate to `workspace-write` or `danger-full-access`, and `workspace-write` may only escalate to `danger-full-access`. The model retries the exact call once with `sandbox_permissions` (the narrowest wider mode) plus a `justification`; the approval service obtains consent for that one call. A wider mode requires approval and applies to that one call only.

## Concrete Example

A `bash` call denied under `workspace-write` retries with `sandbox_permissions: "danger-full-access"` and a `justification`; the approval prompt asks the user, and the `allowed-once` decision runs the command unconfined for that single call.

## Analogy

It is the break-glass box on the wall: you must break the glass (escalate), show your ID (justification), and sign the form (approval) — and the box is refilled after one use.

## Related Concepts

- [[danger-full-access|Danger Full Access]]
- [[consent|Consent]]
- [[approval|Approval]]
