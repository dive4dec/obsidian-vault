---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Frontend Static

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-host-frontend-static` serves the built web shell to browsers from its configured distribution directory. It claims the webserver's fallback seat and answers every request no named route matches: the index path renders the bootstrapped index, existing assets are served directly, traversal returns 403, and unsupported methods return 405. Only one instance can hold the fallback seat at a time.

## Concrete Example

It needs one config value — where the built frontend's `index.html` lives — and index access requires a valid process token or browser cookie while static assets stay public.

## Analogy

The mailroom that hands out any document nobody else claimed, refusing to open doors it isn't allowed through.

## Related Concepts

- [[host-webserver|Host Webserver]]
- [[static-assets|Static Assets]]
- [[base-url|Base URL]]
- [[web|Web Platform]]
