---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Base URL

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

The web app's base URL is where the browser must reach the host: the authenticated startup URL printed by `dsh --profile web`, shaped by flags such as `--port` and any configured base path. The frontend dist is served under that root, so proxying or subpath deployments depend on it being correct.

## Concrete Example

`dsh --profile web --no-open --port 8080` prints the authenticated base URL the SPA and its `/api` bridge are served from.

## Analogy

The street address of the building before you can find any room in it.

## Related Concepts

- [[web|Web Platform]]
- [[spa|SPA]]
- [[host-webserver|Host Webserver]]
- [[remote-access|Remote Access]]
