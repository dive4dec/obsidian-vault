---
tags: [DSH-Security]
domain: Security & Permissions
---

# Windows ACL

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

`dsh-sandbox-windows-acl` confines child-process writes on Windows using a `WRITE_RESTRICTED` token whose restricting SIDs carry separate workspace and private-temp capabilities, lowered to Low integrity. `workspace-write` grants both, `read-only` grants neither. The guarantee is partial: NTFS hard links alias one file object across paths, reads stay unconfined, and a tree another AppContainer tool has ACL'd with a package SID stays unreadable. `init()` throws on any Win32 failure so a child is never spawned unrestricted.

## Concrete Example

Under `workspace-write`, a confined `pwsh` child can write to the workspace and its private temp directory; writes to `C:\Windows` are denied. `dispose()` revokes the revocable (temp) grant and keeps the standing workspace ACE.

## Analogy

It is a keycard with two doors: the office (workspace) and the break room (temp); the card opens both, but the card also has to match a badge (Low integrity) on the badge reader.

## Related Concepts

- [[sandbox-local|Local Sandbox]]
- [[sandbox|Sandbox]]
- [[workspace-write|Workspace-Write]]
- [[sandbox-escape|Sandbox Escape]]
