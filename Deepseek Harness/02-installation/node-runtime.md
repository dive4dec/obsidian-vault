---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Node Runtime

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

dsh runs on the Node.js runtime, and that runtime version is what peer ranges are checked against. The launcher resolves a single runtime version that `dsh --version` reports; incompatible plugins must get an explicit exact-version exemption. A developer cares because the Node version determines which native addons and plugin peer ranges are satisfiable.

## Concrete Example

The runtime version shown by `dsh --version` is the value installation and profile startup enforce declared DSH peer ranges against.

## Analogy

Like the engine rating of a car that tells you which trailers it can tow.

## Related Concepts

- [[version-check|Version Check]]
- [[install-compatibility|Compatibility Check]]
- [[verify-install|Verify Install]]
