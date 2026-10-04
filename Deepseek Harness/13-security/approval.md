---
tags: [DSH-Security]
domain: Security & Permissions
---

# Approval

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

Approval is the one-shot decision flow that pauses a sensitive tool action until a human or machine answerer consents. `dsh-user-approval` is the channel-neutral seam: the `ask` policy routes each request to the deployment's answerers, `never` rejects without prompting, and missing or failed answerers return `unavailable` so the action fails closed. Every request and outcome is recorded in the requesting session's audit log; the model sees only the eventual tool outcome.

## Concrete Example

A `bash` call that escalates to `danger-full-access` with `policy: ask` surfaces the approval prompt; the user's `allowed-once` / `rejected` / `cancelled` decision becomes the call's result text, and both events are logged as `approval/asked` + `approval/decided`.

## Analogy

It is a signature line on a one-time release form: the task waits until someone with authority signs for that one item, and the signed copy is filed.

## Related Concepts

- [[user-approval|User Approval]]
- [[approval-policy|Approval Policy]]
- [[audit-log|Audit Log]]
- [[consent|Consent]]
