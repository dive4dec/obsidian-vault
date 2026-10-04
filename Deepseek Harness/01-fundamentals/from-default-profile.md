---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# From Default Profile

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

`dsh --profile <name> --from-default-profile <template>` creates a new custom profile from a shipped template, then boots it. This is the supported way to start from a known-good composition instead of hand-writing `package.json` and `cordis.patch.yml`. Developers care because it gives a working base they can then patch per-row.

## Concrete Example

`dsh --profile my-profile --from-default-profile headless` copies the shipped headless template into an unused name and boots it.

## Analogy

It is "new file from template" — you get the whole skeleton and only edit what differs.

## Related Concepts

- [[profile-stack|Profile Stack]]
- [[auto-initialize|Auto-Initialize]]
- [[profiles|Profiles]]
