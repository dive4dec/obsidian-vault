---
tags: [Security]
domain: Security
---

# Dangerous Command

> **Domain:** [[_security-moc|Security]]

## Motivation

Commands that can cause irreversible damage: rm -rf, git reset --hard, dd, mkfs, chmod 777. Hermes flags these for approval.

## Concrete Example

rm -rf / - deletes everything. git reset --hard - discards all uncommitted changes. dd if=/dev/zero of=/dev/sda - wipes a disk. These commands are flagged as dangerous and require approval.

## Analogy

A sharp knife in the kitchen - it cuts fast but can hurt you badly. You need permission to use it. Dangerous commands are the sharp knives of the terminal.

## Related Concepts

- [[approvals|Approvals]]
- [[security-overview|Security Overview]]
- [[shell-hooks|Shell Hooks]]
