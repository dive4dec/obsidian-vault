---
tags: [Security]
domain: Security
---

# YOLO Mode

> **Domain:** [[_security-moc|Security]]

## Motivation

A flag (--yolo or HERMES_YOLO_MODE=1) that skips all command approval prompts. Same as approvals.mode: off.

## Concrete Example

hermes --yolo chat. Every command runs instantly. No prompts, no waiting. The user takes full responsibility for what happens.

## Analogy

YOLO (You Only Live Once) is like going on a roller coaster with no safety bar - thrilling and fast, but if something goes wrong, there is nothing to protect you.

## Related Concepts

- [[approval-mode-off|Approval Mode Off]]
- [[approvals|Approvals]]
- [[global-flags|Global Flags]]
