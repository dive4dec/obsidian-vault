---
tags: [DSH-Installation]
domain: Installation & Setup
---

# macOS

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

On macOS, dsh runs on the Node runtime with its own `bin/system.node` addon (from the node-addon-system platform package) rather than the Linux Landlock/flock binaries. A developer cares because native behavior differs on macOS and there is no Linux-style landlock-run launcher there.

## Concrete Example

The node-addon-system macOS platform package provides `bin/system.node` for the running Node process.

## Analogy

Like the same app running with a Mac-specific plugin loaded.

## Related Concepts

- [[platforms|Platforms]]
- [[node-addon|Native Addons]]
- [[portable-install|Portable Install]]
