---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Compatibility Check

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

The compatibility check is the peer-range check performed at install and boot time, comparing each plugin's declared DSH peer range against the runtime version from `dsh --version`. Incompatible plugins require an explicitly acknowledged exact-version exemption. A developer cares because a mismatch here is the difference between a profile that boots and one that refuses to.

## Concrete Example

Installation and profile startup enforce declared DSH peer ranges against `dsh --version`; incompatible plugins need an exact-version exemption.

## Analogy

Like checking that a plug matches the outlet before you flip the switch.

## Related Concepts

- [[version-check|Version Check]]
- [[node-runtime|Node Runtime]]
- [[install-troubleshoot|Install Troubleshooting]]
