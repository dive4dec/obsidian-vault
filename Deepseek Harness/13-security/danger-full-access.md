---
tags: [DSH-Security]
domain: Security & Permissions
---

# Danger Full Access

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

`danger-full-access` is the sandbox mode that bypasses the backend entirely: the consumer spawns the original argv without confinement, and results carry `sandbox: { mode: 'danger-full-access', denied: false }`. It is the top of the escalation ladder — `read-only` may escalate to `workspace-write` or `danger-full-access`, and `workspace-write` may only escalate to `danger-full-access`. Because the provider is never consulted, the model must still obtain approval through the `sandbox_permissions` + `justification` path; the approval service records the grant for that one call.

## Concrete Example

A `bash` call that retries with `sandbox_permissions: "danger-full-access"` and a `justification` surfaces the approval prompt; the user's `allowed-once` decision runs the command unconfined for that single call.

## Analogy

It is a break-glass: the seal is only broken with an explicit human signature, and the tool must be returned (re-locked) after one use.

## Related Concepts

- [[sandbox|Sandbox]]
- [[workspace-write|Workspace-Write]]
- [[break-glass|Break Glass]]
- [[consent|Consent]]
