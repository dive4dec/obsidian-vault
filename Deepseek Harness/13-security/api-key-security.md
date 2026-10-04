---
tags: [DSH-Security]
domain: Security & Permissions
---

# API Key Security

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

API key security in dsh is about keeping the key out of configuration and out of diagnostics. `dsh-credentials-local` stores the key in a private file (owner-only on POSIX), refuses to load a file any other user can read, and reports `describe` without the value. The key can be overridden per run via the launch environment (`DEEPSEEK_API_KEY=… dsh`), which is reported read-only. Rotating the key through the settings UI takes effect on the next request without a restart or configuration edit.

## Concrete Example

`describe(credentialRef('DEEPSEEK_API_KEY'))` returns `{ configured: true, source: 'file', writable: true }` — never the `sk-…` value itself.

## Analogy

It is the key to a mailbox: the mailbox label shows the name, but the key stays on the owner's ring and is never written on the door.

## Related Concepts

- [[credentials|Credentials]]
- [[credentials-local|Local Credentials]]
- [[secret|Secret]]
- [[token|Token]]
