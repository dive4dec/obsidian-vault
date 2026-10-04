---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Host Webserver

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-host-webserver` is the `node:http` server through which browsers reach the web GUI. It does not know harness concepts and serves no files itself: other plugins register named routes, upgrade routes, and one fallback handler (the `/api` bridge, plugin bundles, HMR event stream, and SPA dist all belong to their registering plugins). Route matching is fixed: exact match, then longest prefix, then the fallback.

## Concrete Example

Compose the webserver as the HTTP transport of a browser-facing host, then let feature plugins claim their routes — named routes compose to be disjoint, so registration order carries no request-facing semantics.

## Analogy

A building's front doors and directory: tenants plug in their own offices behind them.

## Related Concepts

- [[web|Web Platform]]
- [[frontend-static|Frontend Static]]
- [[rest-api|REST API]]
- [[websocket|WebSocket]]
