---
tags: [DSH-Security]
domain: Security & Permissions
---

# Isolation

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

Isolation in dsh is same-world confinement: the sandbox confines file effects of each call but the process still shares the host kernel and filesystem. `dsh-sandbox` and `dsh-sandbox-local` provide per-call file-access confinement; `dsh-scope` provides per-agent registration isolation (a tool registered through `agent.ctx` is visible only to that agent). When the whole environment must be isolated, a container, microVM, or remote executor replaces the whole `ctx.shell`/`ctx.fs` capability rather than adding a backend.

## Concrete Example

A `bash` call under `workspace-write` can write to the workspace and `/tmp` but not to `/etc`; a subagent spawned in its own `dsh-scope` sees only the tools registered through its own scoped context.

## Analogy

It is a hotel room: the walls keep you in your room (sandbox), the key card (scope) opens only your room's door, but the building (host kernel) is shared with every other guest.

## Related Concepts

- [[sandbox|Sandbox]]
- [[least-privilege|Least Privilege]]
- [[sandbox-escape|Sandbox Escape]]
