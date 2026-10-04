---
tags: [DSH-Security]
domain: Security & Permissions
---

# Scrubbed Environment

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

Scrubbed environment is the practice of stripping secrets from a service environment before it is exposed to a consumer. In dsh, the launch environment is snapshotted at boot (`dsh-launch-environment`); the credential store resolves keys per request and never materializes them into `process.env`. The local store's document holds only credentials — it is never materialized into the environment, so non-secret entries are not shadowed. This keeps the agent's tool processes from inheriting a broader environment than the deployment intends.

## Concrete Example

`dsh-credentials-local` reads the launch environment snapshot, the parsed document snapshot, and the `.env` fallbacks in precedence order; it never writes the resolved value back into `process.env`, so a tool that reads `process.env` does not see the API key.

## Analogy

It is the security guard who takes your keys (secrets) at the door and hands them back only when you ask — the car in the lot (process.env) does not have your key ring in it.

## Related Concepts

- [[credentials-local|Local Credentials]]
- [[secret|Secret]]
- [[data-protection|Data Protection]]
