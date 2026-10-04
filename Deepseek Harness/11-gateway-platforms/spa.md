---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# SPA

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

The dsh web GUI is a single-page app: the browser loads the bootstrapped index once, and everything after — chat, sessions, settings — happens without full page reloads. The host serves the SPA dist with index fallback, so any in-app route deep-link still resolves to the shell.

## Concrete Example

`dsh-host-frontend-static` answers missing or non-file paths with the SPA index so client-side routes keep working after a reload.

## Analogy

One canvas that repaints itself, instead of fetching a fresh page for every click.

## Related Concepts

- [[web-app|Web App]]
- [[web-frontend|Web Frontend]]
- [[frontend-static|Frontend Static]]
- [[base-url|Base URL]]
