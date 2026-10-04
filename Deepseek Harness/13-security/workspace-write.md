---
tags: [DSH-Security]
domain: Security & Permissions
---

# Workspace-Write

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

`workspace-write` is the sandbox mode that allows file writes under the session's workspace root plus a backend-defined temporary area (`/tmp` on bwrap, host `/tmp` on Landlock, `/private/tmp` plus the per-user temp dir on Seatbelt, a private per-session directory on Windows ACL). Writes outside those roots are denied. It is the mode most deployments opt into for an agent that must edit files but not touch system directories.

## Concrete Example

Under `workspace-write`, `bash` writes to `notes/todo.md` succeed; writes to `/etc/hostname` return `[sandbox: file access denied under workspace-write mode]` and the escalation hint.

## Analogy

It is a fenced garden: you can tend your own bed and the compost heap (temp), but the fence keeps you from the neighbors' plots.

## Related Concepts

- [[sandbox-policy|Sandbox Policy]]
- [[danger-full-access|Danger Full Access]]
- [[read-only|Read-Only]]
- [[file-access|File Access]]
