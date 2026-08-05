---
tags: [Security]
domain: Security
---

# Approval Mode Off

> **Domain:** [[_security-moc|Security]]

## Motivation

All approval prompts are skipped. Equivalent to --yolo. Fast but risky. Not recommended for production.

## Concrete Example

hermes --yolo. All commands run without asking. rm -rf, git push, pip install - all execute immediately. Fast but no safety net.

## Analogy

Driving without a seatbelt - you go faster but if something goes wrong, there is no protection. Off mode is fast but dangerous.

## Related Concepts

- [[approvals|Approvals]]
- [[yolo-mode|YOLO Mode]]
- [[approval-mode-manual|Approval Mode Manual]]
