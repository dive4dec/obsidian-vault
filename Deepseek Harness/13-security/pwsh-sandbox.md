---
tags: [DSH-Security]
domain: Security & Permissions
---

# PowerShell Sandbox

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

`dsh-pwsh-sandbox` is the pwsh twin of `dsh-bash-sandbox`: it inherits `dsh-pwsh-local`'s process mechanics, wraps each `pwsh -Command` invocation through `ctx.sandbox.confine()`, and stamps mode, enforcement, and denial facts on the result. On Windows the runner is the ACL restricted-token chain from `dsh-sandbox-windows-acl`; on Linux/macOS it uses bwrap/Landlock/Seatbelt. Reads are unrestricted on Windows (the ACL runner is `WRITE_RESTRICTED` only).

## Concrete Example

Under `read-only`, a confined `pwsh` child cannot create its AppLocker probe files in temp, so PowerShell conservatively starts in ConstrainedLanguage mode; `Add-Type` and non-core .NET static calls fail.

## Analogy

It is the same forklift with a Windows driver's license: the pallet labels are the same, but the driver's manual (AppLocker/WDAC) adds its own rules on top.

## Related Concepts

- [[bash-sandbox|Bash Sandbox]]
- [[windows-acl|Windows ACL]]
- [[sandbox-policy|Sandbox Policy]]
