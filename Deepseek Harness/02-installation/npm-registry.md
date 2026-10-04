---
tags: [DSH-Installation]
domain: Installation & Setup
---

# npm Registry

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

The npm registry is where `@deepseek-ai/*` packages and a profile's out-of-tree dependencies are fetched from. Bundles first resolve from the dsh installation, then from the profile's own `node_modules`, which pnpm populates from the registry. A developer cares because install and plugin updates need network access to this registry.

## Concrete Example

Profile `node_modules` are filled by pnpm pulling `@deepseek-ai/*` packages from the registry.

## Analogy

Like the storehouse a builder pulls all their parts from.

## Related Concepts

- [[mirror-registry|Mirror Registry]]
- [[offline-install|Offline Install]]
- [[proxy-setup|Proxy Setup]]
