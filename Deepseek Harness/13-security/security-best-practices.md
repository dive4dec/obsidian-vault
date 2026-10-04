---
tags: [DSH-Security]
domain: Security & Permissions
---

# Security Best Practices

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

Security best practices for dsh center on least privilege and fail-closed behavior. Start with `read-only` and escalate only when needed; use `ask` for the approval policy in interactive deployments and `never` for unattended CI. Keep API keys out of configuration and in the credential store. Pin dependency versions in the profile's lockfile. Use the sandbox modes as a boundary, not a substitute for a container when the whole environment must be isolated.

## Concrete Example

A CI pipeline runs `dsh --profile headless` with `sandbox: read-only` and `approval: never`; an interactive web session uses `workspace-write` with `ask` so the user is prompted for wider modes.

## Analogy

It is the hotel's security policy: start with the lobby (read-only), give guests a room key (workspace-write) only when they check in, and the front desk (approval) confirms before opening the vault.

## Related Concepts

- [[least-privilege|Least Privilege]]
- [[sandbox-policy|Sandbox Policy]]
- [[approval-policy|Approval Policy]]
- [[credentials-local|Local Credentials]]
