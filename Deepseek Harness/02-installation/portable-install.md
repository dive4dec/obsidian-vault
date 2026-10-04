---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Portable Install

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

A portable install runs dsh from a fixed checkout rather than a global install, so the whole runtime lives in one directory you control. This checkout-style layout (like `/opt/conda/lib/dsh-stage`) keeps the launcher, packages, and node_modules together. A developer cares because it is self-contained and easy to move, pin, or reproduce.

## Concrete Example

Run `dsh` from a fixed checkout such as `/opt/conda/lib/dsh-stage`, where `node_modules/@deepseek-ai/*` ships alongside the launcher.

## Analogy

Like carrying the whole toolset in one briefcase instead of bolting it to a wall.

## Related Concepts

- [[container|Container Install]]
- [[uninstall|Uninstall]]
- [[prerequisites|Prerequisites]]
