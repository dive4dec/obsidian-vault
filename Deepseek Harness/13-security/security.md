---
tags: [DSH-Security]
domain: Security & Permissions
---

# Security

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

dsh secures agent work with three cooperating seams: the file sandbox (`dsh-sandbox`), the one-shot approval flow (`dsh-user-approval`), and the credential store (`dsh-credentials` + `dsh-credentials-local`). Together they keep model writes confined to the workspace, require human consent for wider modes, and keep API keys out of configuration files. The same-world confinement model is deliberate: the sandbox does not isolate the host, only the file effects of each call.

## Concrete Example

A `bash` call under `workspace-write` that targets `/etc/passwd` is denied with `[sandbox: file access denied under workspace-write mode]` and a `sandbox_permissions` escalation hint; a `DEEPSEEK_API_KEY` set in the launching environment is reported read-only by `dsh-credentials-local`.

## Analogy

It is a hotel room: the desk (approval) issues one key per door, the room's walls (sandbox) keep you inside, and the safe (credential store) holds valuables the front desk never shows.

## Related Concepts

- [[sandbox|Sandbox]]
- [[approval|Approval]]
- [[credentials|Credentials]]
- [[least-privilege|Least Privilege]]
