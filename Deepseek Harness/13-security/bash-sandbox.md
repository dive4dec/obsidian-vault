---
tags: [DSH-Security]
domain: Security & Permissions
---

# Bash Sandbox

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

`dsh-bash-sandbox` is the sandbox-consuming Bash executor that mounts behind `ctx.shell`. It inherits `dsh-bash-local`'s process mechanics, awaits confinement of each `['bash', '-c', command]` argv through `ctx.sandbox.confine()`, and stamps the selected mode, enforcement, and denial facts on each settled result. It is the confining counterpart to `dsh-bash-local`: the same tool, but every command runs under the session's sandbox mode.

## Concrete Example

With `mode: read-only` set in `dsh-sandbox-policy`, a `bash` call that tries `rm -rf notes` fails with `[sandbox: file access denied under read-only mode]` and the escalation hint; the model may retry once with `sandbox_permissions: "workspace-write"`.

## Analogy

It is the same forklift, but every pallet it carries is tagged with a destination label, and a forklift driver (the model) must ask a supervisor before moving a pallet off the labeled shelf.

## Related Concepts

- [[sandbox|Sandbox]]
- [[sandbox-policy|Sandbox Policy]]
- [[pwsh-sandbox|PowerShell Sandbox]]
- [[read-only|Read-Only]]
