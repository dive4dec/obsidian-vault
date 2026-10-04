---
tags: [DSH-Security]
domain: Security & Permissions
---

# FS Sandbox

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

`dsh-fs-sandbox` extends `dsh-fs-local` with a mode fence on `writeText`/`editText`: `read-only` rejects every mutation, `workspace-write` permits targets only inside the session workspace or a platform temporary root, and `danger-full-access` delegates unfenced. Reads, listings, metadata, and read-only watches work exactly as with `fs-local` — the fence only governs mutations. A denied mutation returns `FS_SANDBOX_DENIED`, which filesystem tools present with the active mode and a same-turn escalation hint.

## Concrete Example

Under `workspace-write`, a `write` to `notes/todo.md` succeeds; a `write` to `/etc/hosts` returns `FS_SANDBOX_DENIED` and the tool renders `[sandbox: file access denied under workspace-write mode]`.

## Analogy

It is the same library (fs-local) but with a security guard at the return desk: you can browse freely, but every book you check out must fit in your cart (workspace).

## Related Concepts

- [[sandbox|Sandbox]]
- [[sandbox-policy|Sandbox Policy]]
- [[fs-observation-policy|FS Observation Policy]]
- [[file-access|File Access]]
