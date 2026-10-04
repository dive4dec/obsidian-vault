---
tags: [DSH-Security]
domain: Security & Permissions
---

# Landlock

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

Landlock is the Linux kernel access-control API that `dsh-sandbox-local` falls back to when `bwrap` is not available. Older Landlock ABIs govern only the access classes they expose, so the provider reports `enforcement: partial` rather than overstating the boundary as full. The `@deepseek-ai/node-addon-system/landlock-run` API supplies the launcher, functional probe, and grant vocabulary; `dsh-sandbox-local` maps the sandbox mode to grants only.

## Concrete Example

On a kernel whose Landlock ABI predates `LANDLOCK_ACCESS_FS_REFER`, a `workspace-write` call still confines reads and writes but the provider reports `enforcement: partial` to flag the missing refer-class control.

## Analogy

It is a newer lock that only fits some door sizes — the lock works, but you must label the door as "partially locked" to be honest about which handles it catches.

## Related Concepts

- [[sandbox-local|Local Sandbox]]
- [[sandbox|Sandbox]]
- [[sandbox-escape|Sandbox Escape]]
