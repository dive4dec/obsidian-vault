---
tags: [DSH-Security]
domain: Security & Permissions
---

# Read-Only

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

`read-only` is the fail-safe sandbox mode and the default in `dsh-sandbox-policy`. It denies all writes except required sinks such as `/dev/null` (so `>/dev/null` keeps working). Reads, listings, metadata, and read-only watches work exactly as with `fs-local`. On Windows, `read-only` grants no explicit writable root but remains partial because of the shared hard-link, unconfined-read, and AppContainer-ACL limits.

## Concrete Example

Under `read-only`, a `bash` call that tries `rm -rf notes` fails with `[sandbox: file access denied under read-only mode]`; a `read` of `/etc/hosts` succeeds.

## Analogy

It is the viewing gallery: you can look at everything through the glass, but you cannot touch anything — except the brochure stand (dev/null) where you're allowed to drop a note.

## Related Concepts

- [[sandbox-policy|Sandbox Policy]]
- [[workspace-write|Workspace-Write]]
- [[danger-full-access|Danger Full Access]]
