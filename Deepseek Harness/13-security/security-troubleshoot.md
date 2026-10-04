---
tags: [DSH-Security]
domain: Security & Permissions
---

# Security Troubleshooting

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

Security troubleshooting is diagnosing permission denials and sandbox failures. A denied call reports a marker naming the mode — `[sandbox: file access denied under <mode> mode]` — and, when the composition advertises escalation, an escalation hint. A broken sandbox is distinguishable from a command failure: a runner that fails before executing the command reports a structured runner-failure signature. On Windows, the bundled `diagnose-windows-sandbox-acl` skill helps diagnose denials the tool layer can only report.

## Concrete Example

A `bash` call under `workspace-write` that writes to `/etc` returns `[sandbox: file access denied under workspace-write mode]` plus the escalation hint; a `SANDBOX_UNAVAILABLE` error names the missing platform runner (e.g. "Install bubblewrap or run a Landlock-enforcing kernel").

## Analogy

It is the security guard who tells you which door is locked (mode), which key to ask for (escalation hint), and whether the lock itself is broken (runner-failure signature).

## Related Concepts

- [[sandbox|Sandbox]]
- [[approval|Approval]]
- [[sandbox-escape|Sandbox Escape]]
