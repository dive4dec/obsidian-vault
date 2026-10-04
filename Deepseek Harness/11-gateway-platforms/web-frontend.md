---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Web Frontend

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

The web frontend is the built, browser-side half of the `dsh-web-app` GUI. Production runs require built frontend artifacts: `pnpm run build` produces the dist that the host serves. The frontend is a single-page app that boots once and then drives the Host through the API gateway.

## Concrete Example

After `pnpm run build`, the built dist directory is what `dsh-host-frontend-static` serves to the browser.

## Analogy

The rendered dashboard on the wall, as opposed to the sensors and pipes behind it.

## Related Concepts

- [[web-app|Web App]]
- [[frontend-static|Frontend Static]]
- [[spa|SPA]]
- [[static-assets|Static Assets]]
