---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Patch Layer

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

Each layer in a profile's composition — the base template, each bundle's patch, the profile's `cordis.patch.yml`, the home-level patch, and `--patch` overlays — is a patch layer applied in order over an empty root. Within a layer and across layers, the last write wins per row id, and a patch entry replaces the target's entire configuration rather than merging. Developers care because reasoning in layers (who owns a row, which layer shadows it) is how you debug a misconfigured profile.

## Concrete Example

`dsh --dump-default-config` and `--dump-config` print the composed tree so you can see which layer won each row.

## Analogy

It is CSS: later, higher-specificity rules override earlier ones, and the cascade decides the final value.

## Related Concepts

- [[profile-stack|Profile Stack]]
- [[cordis-patch|cordis.patch.yml]]
- [[hmr|HMR]]
