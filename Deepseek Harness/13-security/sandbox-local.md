---
tags: [DSH-Security]
domain: Security & Permissions
---

# Local Sandbox

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

`dsh-sandbox-local` is the per-platform backend provider that `ctx.sandbox` actually runs on. On Linux it tries `bwrap` first and falls back to Landlock; on macOS it uses Seatbelt (`sandbox-exec`); on Windows it uses the ACL restricted-token runner from `dsh-sandbox-windows-acl`. Each candidate is functionally probed once and the first usable verdict is cached for the provider's lifetime. The runner reports `full` or `partial` enforcement per call.

## Concrete Example

On a Linux host, `dsh-sandbox-local` selects `bwrap` for a `workspace-write` bash call and reports `enforcement: full`; on an older Landlock ABI it reports `partial` because the kernel exposes fewer access classes.

## Analogy

It is a chain of door locks: bwrap is the deadbolt, Landlock is the chain, and Seatbelt is the mac on macOS — whichever is strongest and usable wins.

## Related Concepts

- [[sandbox|Sandbox]]
- [[landlock|Landlock]]
- [[windows-acl|Windows ACL]]
- [[sandbox-escape|Sandbox Escape]]
