---
tags: [DSH-Security]
domain: Security & Permissions
---

# Path Traversal

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

Path traversal is the risk that a file operation escapes the workspace through `..` sequences or symlinks. `dsh-fs-local` documents that `config.cwd` is a resolution default, not a containment boundary — absolute paths and `..` escape it. `dsh-fs-sandbox` closes the gap by re-canonicalizing the target immediately before the write and requiring containment under one of the writable roots derived from the shared `writableRoots` function. The residual resolve-to-syscall TOCTOU is narrowed but not eliminated; adversarial host processes are out of scope.

## Concrete Example

Under `workspace-write`, a `write` to `../../etc/hosts` is re-canonicalized to `/etc/hosts` and denied with `FS_SANDBOX_DENIED`; a symlink inside the workspace that points outside is caught by the re-canonicalization.

## Analogy

It is the guard at the mall who checks your cart at the exit: you can put anything in the cart inside the mall (workspace), but the guard re-scans it before you leave and catches the item you tucked under the seat (`..`).

## Related Concepts

- [[fs-sandbox|FS Sandbox]]
- [[file-access|File Access]]
- [[sandbox-escape|Sandbox Escape]]
