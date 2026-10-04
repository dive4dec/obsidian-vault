---
tags: [DSH-Security]
domain: Security & Permissions
---

# Sandbox Escape

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

Sandbox escape is the risk that a confined process writes outside its allowed roots. dsh mitigates this with fail-closed behavior: if no backend can enforce the requested mode, the call fails with `SANDBOX_UNAVAILABLE` rather than running unconfined. The fs fence re-canonicalizes the target immediately before the write to narrow the resolve-to-syscall TOCTOU. On Windows, the ACL runner is `WRITE_RESTRICTED` only — reads stay unconfined, and hard links alias file objects across paths, which is why the provider reports `enforcement: partial`.

## Concrete Example

A `bash` call under `workspace-write` that tries to write to `/etc/passwd` is denied; a symlink inside the workspace that points outside is caught by the re-canonicalization in `dsh-fs-sandbox`. On Windows, a hard link from outside the workspace to a file inside it would be writable through the external alias.

## Analogy

It is the prison wall: the wall is thick (fail-closed), the guard re-checks the map at every exit (re-canonicalization), and the wall has known thin spots (hard links) that are labeled on the map.

## Related Concepts

- [[sandbox|Sandbox]]
- [[path-traversal|Path Traversal]]
- [[isolation|Isolation]]
