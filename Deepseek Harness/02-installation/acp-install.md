---
tags: [DSH-Installation]
domain: Installation & Setup
---

# ACP Install

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

An ACP install sets up the ACP profile for automation clients, serving them over ACP stdio until disconnect. A developer cares because ACP is the entry mode for external automation harnesses, not for humans chatting, so the footprint and lifecycle (until disconnect) differ from web/headless.

## Concrete Example

`dsh --profile acp` serves automation clients over ACP stdio until disconnect.

## Analogy

Like a dedicated line that stays open only while the caller is connected.

## Related Concepts

- [[install-modes|Install Modes]]
- [[sdk-install|SDK Install]]
- [[install-profile|Installing a Profile]]
