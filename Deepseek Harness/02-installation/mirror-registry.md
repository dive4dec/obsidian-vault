---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Mirror Registry

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

A mirror registry is an alternate registry endpoint you point at instead of the public npm registry, useful behind corporate networks or for faster, controlled installs. Since dsh plugins are fetched as `@deepseek-ai/*` packages, the mirror must carry those. A developer cares because it changes where install and `dsh plugin` look for packages.

## Concrete Example

Configure pnpm to use a mirrored registry that hosts the `@deepseek-ai/*` packages so `dsh plugin` resolves from it.

## Analogy

Like using a local distributor instead of the national warehouse.

## Related Concepts

- [[npm-registry|npm Registry]]
- [[proxy-setup|Proxy Setup]]
- [[offline-install|Offline Install]]
