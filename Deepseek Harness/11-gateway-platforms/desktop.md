---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Desktop

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

The `desktop` name is reserved for the Electron-owned profile, so the CLI rejects boot, config-dump, and plugin-management requests for it. The desktop host reuses the shared `@deepseek-ai/dsh/profile-boot` lifecycle and loads the web dist over `file://` with fetch carried over an IPC bridge, so the browser webserver serves no files to it.

## Concrete Example

`dsh --profile desktop` is refused by the launcher; only the Electron host may run that profile.

## Analogy

A model apartment that only the building owner's key can open.

## Related Concepts

- [[platforms|Platforms]]
- [[web-app|Web App]]
- [[client-server|Client-Server]]
- [[platform-adapter|Platform Adapter]]
