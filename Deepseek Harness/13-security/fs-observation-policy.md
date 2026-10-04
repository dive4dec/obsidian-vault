---
tags: [DSH-Security]
domain: Security & Permissions
---

# FS Observation Policy

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

`dsh-fs-observation-policy` is a read-before-edit gate that makes filesystem tools require an agent to read a file before overwriting or editing it. It also rejects a mutation when the file has changed since that read (`FS_STALE_VERSION`), and returns a clear instruction to re-read and retry. Reading a missing path authorizes guarded creation, while concurrent creation remains protected. Observed state is not persisted, so resumed sessions must re-read targets.

## Concrete Example

An `edit` on `app.ts` without a prior `read` fails with `FS_NOT_OBSERVED` and policy reason `edit requires reading "app.ts" first`; after the `read`, the edit succeeds as a compare-and-swap against the observed version.

## Analogy

It is the librarian who says "show me the card you got when you first looked at this book" before letting you write in it — and re-checks that the pages have not been turned since.

## Related Concepts

- [[fs-sandbox|FS Sandbox]]
- [[gate|Gate]]
- [[file-access|File Access]]
- [[consent|Consent]]
