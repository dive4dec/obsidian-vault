---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# API Gateway

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-api-gateway` is the two-sided Typert RPC endpoint that lets the web browser talk to the dsh Host. The Host side exposes `ctx.typertGateway` and validates named arguments, resolves lookups, and dispatches to business services marked with `@Remote`; the client side (`/client` export) exposes `ctx.remote`. Without it, no web client call reaches a session, settings, or workspace controller.

## Concrete Example

`ctx.typertGateway.invoke()` runs one request, while `ctx.typertGateway.stream()` serves multiplexed streams over the `/api/remote.mux` WebSocket, with a Client-to-Host uplink on the same logical stream.

## Analogy

A switchboard that routes, validates, and multiplexes every call between the browser and the host.

## Related Concepts

- [[client-connection|Client Connection]]
- [[api-remotes|Remotes API]]
- [[rest-api|REST API]]
- [[websocket|WebSocket]]
