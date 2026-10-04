---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Web Install

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

A web install sets up the web profile so `dsh web` boots the Web GUI. It auto-initializes the `web` profile from its shipped template on first use. App flags like `--port` belong to the web app, not the launcher. A developer cares because this is the interactive entry point and its port/base-url behavior matters for serving.

## Concrete Example

`dsh web` boots the Web profile; app flags like `dsh --profile web --port 8080` are parsed by the web app.

## Analogy

Like opening a storefront instead of a back-room console.

## Related Concepts

- [[install-modes|Install Modes]]
- [[first-session|First Session]]
- [[install-profile|Installing a Profile]]
