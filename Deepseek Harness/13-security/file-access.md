---
tags: [DSH-Security]
domain: Security & Permissions
---

# File Access

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

File access is the question of which files an operation may touch. In dsh, the sandbox mode decides: `read-only` denies all writes, `workspace-write` allows writes under the workspace root plus a platform temp area, and `danger-full-access` bypasses confinement. The fs fence in `dsh-fs-sandbox` re-canonicalizes the target and checks containment; the observation policy in `dsh-fs-observation-policy` requires a prior read before an edit. Reads are unrestricted in all modes — the fence governs mutations only.

## Concrete Example

Under `workspace-write`, a `read` of `/etc/hosts` succeeds; a `write` to `/etc/hosts` is denied with `FS_SANDBOX_DENIED`; an `edit` of `notes/todo.md` succeeds only after a prior `read`.

## Analogy

It is the library: you can browse any book (read), but you can only check out books from your section (workspace-write), and the librarian (observation policy) wants to see your card before you write in a book.

## Related Concepts

- [[fs-sandbox|FS Sandbox]]
- [[fs-observation-policy|FS Observation Policy]]
- [[path-traversal|Path Traversal]]
