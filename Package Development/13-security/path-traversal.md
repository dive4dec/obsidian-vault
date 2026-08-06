---
tags: [Security]
domain: Security
---

# Path Traversal

> **Domain:** [[_security-moc|Security]]

## 🎯 Motivation

User-supplied filenames can contain `../` sequences that escape intended directories. An attacker might read `/etc/passwd` by requesting `../../etc/passwd` from a file endpoint.

## 📋 Concrete Example

Do not open `os.path.join(base_dir, user_filename)` directly. First resolve and check `os.path.realpath()` starts with `base_dir`, rejecting any path that tries to escape upward.

## 🔗 Analogy

A hotel keycard that only opens your floor. Without that check, a guest could wander into any room by taking the stairs — the keycard must enforce boundaries, not just open doors.

## Related Concepts

- [[input-validation|Input Validation]]
- [[command-injection|Command Injection]]
- [[sensitive-data-exposure|Sensitive Data Exposure]]
