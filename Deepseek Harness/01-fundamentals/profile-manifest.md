---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Profile Manifest

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

The profile manifest is the `dsh.profile` field in a profile's `package.json`, holding the ordered `bundles` list that determines layer precedence. HMR reloads only when this ordered list changes, and the plugin manager's bundle toggle edits exactly this list. Developers care because it is the single source of truth for which bundles a profile uses and in what order.

## Concrete Example

```json
{
  "dsh": { "profile": { "bundles": ["@deepseek-ai/dsh-base"] } }
}
```

## Analogy

It is the manifest of a shipping container — the ordered list of what is inside and where each item sits.

## Related Concepts

- [[plugin-bundle|Plugin Bundle]]
- [[profile-stack|Profile Stack]]
- [[hmr|HMR]]
