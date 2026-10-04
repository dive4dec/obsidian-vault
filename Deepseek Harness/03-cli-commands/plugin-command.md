---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# dsh plugin

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

`dsh plugin --profile <name> <pnpm args>` manages a profile's plugins by forwarding to pnpm in the profile directory. It shares package operations and the profile write lock with the plugin manager, and package updates retain disabled bundle selections.

## Concrete Example

`dsh plugin --profile web add <package>` installs a plugin into the web profile's `node_modules`.

## Analogy

A package manager wearing your profile's name tag — pnpm running inside that profile's folder.

## Related Concepts

- [[profile-flag|--profile Flag]]
- [[desktop-rejected|Desktop Rejection]]
- [[launcher-flags|Launcher Flags]]
