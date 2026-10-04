---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Client-Server

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

The web GUI is a client–host architecture: the browser client mounts `ctx.connection` and talks to the Host over the `/api` bridge, while the Host runs the actual agent, sessions, and controllers. All browser-to-host traffic flows through `dsh-client-connection` and `dsh-api-gateway`, which keeps the client free of harness concepts.

## Concrete Example

The client's `ctx.connection` carries loopback state, generic Remote RPC, and the active generation, while the Host side registers a trusted-host interceptor on Connection's shared `/api` FetchHandler.

## Analogy

A cockpit and an engine room: the pilot gives orders; the crew executes and reports back.

## Related Concepts

- [[gateway|API Gateway]]
- [[client-connection|Client Connection]]
- [[rest-api|REST API]]
- [[websocket|WebSocket]]
