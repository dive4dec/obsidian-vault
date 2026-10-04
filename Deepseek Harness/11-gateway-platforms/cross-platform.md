---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Cross-Platform

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

dsh platforms abstract the host environment so the same profile works across OSes. The web GUI is a pure browser app, so Linux, macOS, and Windows operators use identical code; `dsh-sdk-minimal` ships a platform-selected persistent shell, and the directory picker offers a native OS chooser where a display is reachable or an in-app browser elsewhere.

## Concrete Example

`dsh-sdk-minimal` advertises only a platform-selected persistent shell, and `dsh-host-directory-picker` picks the native chooser versus the in-app browser based on whether the operator can reach the host display.

## Analogy

One product whose packaging, not the contents, changes per country.

## Related Concepts

- [[platforms|Platforms]]
- [[platform-adapter|Platform Adapter]]
- [[sdk-minimal|SDK Minimal]]
- [[directory-picker|Directory Picker]]
