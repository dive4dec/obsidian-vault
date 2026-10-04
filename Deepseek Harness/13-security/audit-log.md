---
tags: [DSH-Security]
domain: Security & Permissions
---

# Audit Log

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

The audit log is the durable record of every approval request and outcome in a session. `dsh-user-approval` appends `approval/asked` with the request identity and tool, then `approval/decided` with the closed outcome; both are log-only and validated by an invariant companion that pairs them by id within one open turn. The sandbox mode switch is also recorded as a log-only `sandbox/mode` event that survives restart through replay. The model sees only the eventual tool outcome, not the audit events.

## Concrete Example

A `bash` escalation to `danger-full-access` produces two log entries: `approval/asked` (agent, tool, reason) and `approval/decided` (outcome: `allowed-once`). A session resume replays both.

## Analogy

It is the security camera at the vault door: it records who signed the form and when, but the camera footage is not shown to the people walking by.

## Related Concepts

- [[approval|Approval]]
- [[user-approval|User Approval]]
- [[data-protection|Data Protection]]
