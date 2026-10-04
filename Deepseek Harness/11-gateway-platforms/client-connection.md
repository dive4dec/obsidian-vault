---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Client Connection

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-client-connection` is the browser-to-host wire layer of the web GUI: it carries Remote RPC calls, event-stream delivery with reconnect, exact Fetch routes, the `/api` HTTP bridge, and the browser-trust fence. The Client plugin mounts `ctx.connection` with the active generation, observable recovery state, and an immediate reconnect command.

## Concrete Example

A generation becomes visible when its source reports ready; source failure, withdrawal, or an explicit stop clears it before `ConnectionController` applies its retry policy.

## Analogy

The phone switchboard inside the cockpit, managing call setup, redial, and drop detection.

## Related Concepts

- [[client-server|Client-Server]]
- [[gateway|API Gateway]]
- [[websocket|WebSocket]]
- [[hmr|HMR]]
