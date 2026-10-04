---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Sandbox

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

`dsh-sandbox` is the isolation boundary for file and process operations. A command runs without writes (`read-only`), writes only inside its workspace (`workspace-write`), or unrestricted (`danger-full-access`); if the requested mode cannot be enforced, the call fails with `SANDBOX_UNAVAILABLE` instead of running unconfined. After a denied call, the model can request one strictly wider mode for human approval via `sandbox_permissions` plus a `justification`. This is same-world confinement — the process still shares the host kernel and filesystem.

## Concrete Example

A denied call reports `[sandbox: file access denied under workspace-write mode]` with an escalation hint.

## Analogy

It is a locked room with one window that opens only when someone at the desk grants permission.

## Related Concepts

- [[permission|Permission]]
- [[approval|Approval]]
- [[workspace-root|Workspace Root]]
