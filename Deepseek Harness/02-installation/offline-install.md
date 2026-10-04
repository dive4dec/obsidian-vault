---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Offline Install

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

An offline install avoids live registry access by using a local registry or a pre-populated cache, since profile plugin dependencies normally come from the npm registry. A developer cares because it lets you install in network-restricted environments by serving the `@deepseek-ai/*` packages locally.

## Concrete Example

Point pnpm at a local registry or pre-seeded cache so profile `node_modules` can be installed without the public registry.

## Analogy

Like stocking a pantry in advance so you can cook without a shop run.

## Related Concepts

- [[mirror-registry|Mirror Registry]]
- [[npm-registry|npm Registry]]
- [[install-troubleshoot|Install Troubleshooting]]
