---
tags: [DSH-Security]
domain: Security & Permissions
---

# Gate

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

A gate is a check that must pass before an operation proceeds. In dsh, gates appear at several points: the sandbox fence in `dsh-fs-sandbox` re-canonicalizes the target and checks containment before a write; the approval gate in `dsh-user-approval` pauses a sensitive operation until an answerer consents; and the observation gate in `dsh-fs-observation-policy` requires a prior read before an edit. Each gate is a decision point with a pass/deny outcome, and each denial carries a structured error the model can act on.

## Concrete Example

The observation gate rejects an `edit` on an unread file with `FS_NOT_OBSERVED` and the remedy "read the file, then retry"; the sandbox gate rejects a write outside the workspace with `FS_SANDBOX_DENIED`.

## Analogy

It is the turnstile at the office: you must show a badge (read), and the turnstile (gate) decides whether to let you through — a missing badge means "go get one" (re-read), not "you're banned".

## Related Concepts

- [[fs-observation-policy|FS Observation Policy]]
- [[sandbox|Sandbox]]
- [[approval|Approval]]
