---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Runtime Wheel

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

The Python runtime wheel is an alternate packaging of the same `dsh` command, so the launcher is available from a Python environment. The SDK defaults to the `sdk` profile and the minimal example selects `sdk-minimal` when running through it. A developer cares because it means dsh is not limited to a global Node/npm install.

## Concrete Example

The Python runtime wheel packages the same `dsh` command; the SDK defaults to `sdk`, the minimal example to `sdk-minimal`.

## Analogy

Like the same engine offered as a drop-in for a different chassis.

## Related Concepts

- [[install-modes|Install Modes]]
- [[sdk-install|SDK Install]]
- [[portable-install|Portable Install]]
