---
tags: [DSH-Security]
domain: Security & Permissions
---

# Sandbox

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

`dsh-sandbox` is the process-sandbox service contract that confines every subprocess spawned by `dsh-bash-sandbox`, `dsh-pwsh-sandbox`, and the `ctx.fs` mutations. A call runs under `read-only`, `workspace-write`, or `danger-full-access`; if no backend can enforce the requested mode, the call fails with `SANDBOX_UNAVAILABLE` rather than running unconfined. A denied call can be retried once with a strictly wider mode via the `sandbox_permissions` + `justification` escalation.

## Concrete Example

Mounting `@deepseek-ai/dsh-sandbox-local` behind `ctx.sandbox` with `dsh-sandbox-policy` set to `mode: workspace-write` causes every bash call to write only under the workspace root plus `/tmp`.

## Analogy

It is a locked cage: the animal (subprocess) can roam the pen but never leaves it, and the keepers must unlock a wider pen before it can move to a bigger field.

## Related Concepts

- [[sandbox-local|Local Sandbox]]
- [[sandbox-policy|Sandbox Policy]]
- [[workspace-write|Workspace-Write]]
- [[danger-full-access|Danger Full Access]]
