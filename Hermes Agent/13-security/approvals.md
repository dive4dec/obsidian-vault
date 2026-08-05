---
tags: [Security]
domain: Security
---

# Approvals

> **Domain:** [[_security-moc|Security]]

## Motivation

Hermes prompts the user before running shell commands flagged as destructive (rm -rf, git reset --hard). Three modes: manual, smart, off.

## Concrete Example

Mode manual: rm -rf /tmp/test -> Hermes asks: Approve this command? You press Y. Mode smart: low-risk commands auto-approved, high-risk still prompted. Mode off: no prompts.

## Analogy

A parent checking homework before you submit - they ask: Are you sure about this answer? For easy questions they let it pass. For risky ones they double-check. Approvals work the same way for commands.

## Related Concepts

- [[security-overview|Security Overview]]
- [[yolo-mode|YOLO Mode]]
- [[dangerous-command|Dangerous Command]]
