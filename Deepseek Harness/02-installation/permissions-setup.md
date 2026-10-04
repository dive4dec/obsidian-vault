---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Permissions Setup

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

Permissions setup covers file permissions on `$DSH_HOME` and the workspace. The local credentials file is created owner-only, and on POSIX dsh refuses to load a credentials file that any other user can read, telling you to run `chmod 600`. A developer cares because wrong permissions block credential loading at startup.

## Concrete Example

The `.credentials.yaml` store is owner-only; on POSIX a world-readable file is rejected with a `chmod 600` hint.

## Analogy

Like making sure the lock on your safe is engaged before trusting it with the deed.

## Related Concepts

- [[credentials-setup|Credentials Setup]]
- [[config-dir-locate|Locate Config Dir]]
- [[backup-config|Back Up Config]]
