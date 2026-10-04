---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# HMR

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-hmr` reloads plugin source and configuration while an application is running. Module replacements, Include refreshes, and profile configuration changes share one coordinated queue, while package installation runs outside it. When enabled in YAML, it watches the profile manifest and both profile and home patch files, then recomposes all layers through one serialized reload.

## Concrete Example

With HMR enabled, editing `cordis.patch.yml` triggers a reload without restarting the profile; without it, changes apply on restart.

## Analogy

A hot seat that swaps the chair mid-game so play never pauses.

## Related Concepts

- [[client-hmr|Client HMR]]
- [[client-connection|Client Connection]]
- [[platforms|Platforms]]
- [[client-modules|Client Modules]]
