---
tags: [DSH-Security]
domain: Security & Permissions
---

# Data Protection

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

Data protection in dsh covers keeping user data — credentials, session history, telemetry — from leaking to the wrong consumer. The credential store keeps secret values out of configuration and diagnostics. The anonymous user ID is random, never derived from identifying sources, and home-scoped. The session log and telemetry carry the ID but not the user's name or machine details. The credential file is owner-only on POSIX and the product never hands the agent the file's path.

## Concrete Example

The credential file at `$DSH_HOME/.credentials.yaml` is created with owner-only permissions; on POSIX the product refuses to load a file that any other user can read, with an error telling you to `chmod 600`.

## Analogy

It is the privacy screen on an ATM: the screen hides the PIN from bystanders, but the ATM's own processor still knows it.

## Related Concepts

- [[credentials-local|Local Credentials]]
- [[secret|Secret]]
- [[anonymous-user-id|Anonymous User ID]]
