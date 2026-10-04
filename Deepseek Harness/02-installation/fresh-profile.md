---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Fresh Profile

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

A fresh profile is a clean custom profile created from a shipped template, so you start from a known-good composition and layer your own changes on top. You create one at an unused, non-shipped name with `--from-default-profile`. A developer cares because it is the standard way to get a profile you own without inheriting someone else's edits.

## Concrete Example

`dsh --profile myprof --from-default-profile web` creates a clean custom profile from the web template, then boots it.

## Analogy

Like starting from a blank template instead of someone else's saved document.

## Related Concepts

- [[install-profile|Installing a Profile]]
- [[init-profile|Initialize a Profile]]
- [[profile-clone|Clone a Profile]]
