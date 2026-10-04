---
tags: [DSH-Security]
domain: Security & Permissions
---

# Version Pinning

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

Version pinning is the practice of pinning dependency versions to prevent silent upgrades that change behavior. dsh enforces peer ranges at install and boot against the dsh runtime version; the plugin manager forwards to pnpm in the profile directory, which pins the resolved versions in the profile's `package-lock.json`. A profile's `dsh.profile` field names the ordered bundles, and each bundle's package is pinned by the lockfile. The credential file carries `version: 1`, and a pre-release flat layout is upgraded in place on boot.

## Concrete Example

A profile's `package-lock.json` pins `@deepseek-ai/dsh-bash-sandbox` to a specific version; a `dsh plugin` upgrade that bumps it is an explicit act, not a silent change.

## Analogy

It is the recipe card that says "1 cup of flour, the brand on the card" — you don't swap in a different brand without rewriting the card.

## Related Concepts

- [[supply-chain|Supply Chain]]
- [[credentials-local|Local Credentials]]
