---
tags: [DSH-Security]
domain: Security & Permissions
---

# Local Credentials

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

`dsh-credentials-local` is the default file-backed credential store, living at `$DSH_HOME/.credentials.yaml`. It keeps API keys and other secrets in a private file owned only by the OS user; the product refuses to load a file any other user can read (POSIX), and the agent is not isolated because its tool processes run as the same user. Lookup follows a fixed precedence: launch environment > stored file > project `.env` > home `.env`. A newly saved value immediately overrides older `.env` values.

## Concrete Example

`DEEPSEEK_API_KEY=sk-… dsh` wins over the stored file for that run and is reported read-only; saving a new key through the settings UI takes effect on the next request and survives restart.

## Analogy

It is a locked safe in the office: only the owner has the combination, but the forklift driver (agent) works in the same office and can see the safe's location — the safe is discretion, not a wall.

## Related Concepts

- [[credentials|Credentials]]
- [[secret|Secret]]
- [[api-key-security|API Key Security]]
- [[data-protection|Data Protection]]
