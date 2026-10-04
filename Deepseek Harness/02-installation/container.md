---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Container Install

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

A container install runs dsh inside a container, where the launcher and its `node_modules` live in the image and `$DSH_HOME` is a volume. Proxy and credential env vars are typically injected with `-e`. A developer cares because the launch environment wins credential precedence, so container-injected `DEEPSEEK_API_KEY` shadows stored values for that run.

## Concrete Example

Run dsh in a container and pass `DEEPSEEK_API_KEY` via `-e`; the launch environment wins credential resolution for that run.

## Analogy

Like shipping the whole setup in a sealed box you can drop onto any host.

## Related Concepts

- [[portable-install|Portable Install]]
- [[env-setup|Environment Setup]]
- [[proxy-setup|Proxy Setup]]
