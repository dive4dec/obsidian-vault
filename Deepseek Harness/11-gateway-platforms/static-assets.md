---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Static Assets

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

Static assets are the built files of the web shell — the SPA index plus JS/CSS bundles — that the host serves to browsers. Unlike the index, which requires a valid process token or browser cookie, static assets remain public, so the browser can load the shell fast and then authenticate for data routes.

## Concrete Example

`dsh-host-frontend-static` serves existing assets directly from the configured dist directory while missing or non-file paths return 404.

## Analogy

The printed brochures outside the front door, versus the vault behind the reception desk.

## Related Concepts

- [[frontend-static|Frontend Static]]
- [[spa|SPA]]
- [[web-frontend|Web Frontend]]
- [[base-url|Base URL]]
