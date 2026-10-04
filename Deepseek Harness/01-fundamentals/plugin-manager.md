---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Plugin Manager

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

The plugin manager manages a profile's plugins by forwarding to pnpm in the profile directory via `dsh plugin --profile <name> <pnpm args>`. It shares package operations and the profile write lock with the `dsh plugin` command, retains disabled bundle selections across package updates, and applies changes immediately when HMR is enabled (otherwise on restart). Every tool action requires `danger-full-access` or approval for that call.

## Concrete Example

`dsh plugin --profile my-profile add <package>` installs an out-of-tree bundle into the profile's `node_modules`.

## Analogy

It is `npm install` for the profile, with a lock file and a review gate before anything runs.

## Related Concepts

- [[plugin-registry|Plugin Registry]]
- [[version-compatibility|Version Compatibility]]
- [[plugin|Plugin]]
