---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Version Check

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

A version check reads `dsh --version` and interprets the result against plugin peer ranges. The reported runtime version is what installation and profile startup enforce declared DSH peer ranges against, and incompatible plugins need an exact-version exemption. A developer cares because the number is the anchor for every compatibility decision.

## Concrete Example

`dsh --version` prints the runtime version that peer-range checks compare against.

## Analogy

Like reading the speedometer to know what load is safe.

## Related Concepts

- [[verify-install|Verify Install]]
- [[install-compatibility|Compatibility Check]]
- [[node-runtime|Node Runtime]]
