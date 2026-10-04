---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Initialize a Profile

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

First-use auto-initialization is how the shipped profiles materialize on disk. The `web`, `headless`, `sdk`, `sdk-minimal`, and `acp` profiles initialize from shipped templates the first time you boot them. A developer cares because you do not manually scaffold these; dsh does it for you on first run.

## Concrete Example

Running `dsh web` for the first time auto-initializes the web profile from its shipped template.

## Analogy

Like the box opening itself and assembling on first use.

## Related Concepts

- [[install-profile|Installing a Profile]]
- [[first-run|First Run]]
- [[fresh-profile|Fresh Profile]]
