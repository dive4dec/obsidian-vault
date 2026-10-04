---
tags: [DSH-Security]
domain: Security & Permissions
---

# Least Privilege

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

Least privilege is the principle of granting the narrowest access that suffices. In dsh it manifests as: the fail-safe sandbox default is `read-only`; the escalation ladder is closed (`read-only` → `workspace-write` → `danger-full-access`, no skipping); the approval policy default is `ask` so sensitive operations pause for consent; and the credential store's `describe` never returns the value. Each knob is the minimum that allows the operation, and wider access always requires an explicit human signature.

## Concrete Example

A `bash` call that only needs to read `notes/todo.md` runs under `read-only` without any approval; a call that needs to write outside the workspace must escalate through `workspace-write` (ask) to `danger-full-access` (ask), with each step logged.

## Analogy

It is the hotel key card: it opens only your room, not the server room — and to get a different key you must ask the front desk and sign a form.

## Related Concepts

- [[sandbox|Sandbox]]
- [[approval|Approval]]
- [[gate|Gate]]
