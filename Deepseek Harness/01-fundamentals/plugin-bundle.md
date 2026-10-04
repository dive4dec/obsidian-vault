---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Plugin Bundle

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

A plugin bundle is a group of packages bundled together and loaded as one layer in a profile's ordered `dsh.profile.bundles` list. Bundles resolve from the dsh installation first — `@deepseek-ai/dsh-base`, `@deepseek-ai/dsh-web-app`, `@deepseek-ai/dsh-headless`, `@deepseek-ai/dsh-sdk-app`, `@deepseek-ai/dsh-sdk-minimal`, `@deepseek-ai/dsh-acp-app` — then from the profile's own `node_modules`, where pnpm installs out-of-tree plugins. Developers care because bundles are the coarse unit of composition: each one is a pre-cooked patch of many plugin rows.

## Concrete Example

A minimal base-backed profile names `"bundles": ["@deepseek-ai/dsh-base"]` in its `dsh.profile` manifest.

## Analogy

It is a prebuilt furniture set — you buy the whole stack as one line item, not piece by piece.

## Related Concepts

- [[profile-manifest|Profile Manifest]]
- [[profile-stack|Profile Stack]]
- [[plugin|Plugin]]
