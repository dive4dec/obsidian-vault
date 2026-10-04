---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# WebSocket

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

Live updates to the web client ride a multiplexed WebSocket: the client opens the Gateway-owned `/api/remote.mux` socket when its plugin activates and keeps it connected even while idle. Independently cancellable logical streams share the socket, and the Host sends Ping control frames (two-second default interval) so idle network intermediaries see traffic.

## Concrete Example

`ctx.typertGateway.stream()` returns a cancellation-aware iterable over the business items, with a Client-to-Host uplink on the same logical stream.

## Analogy

One telephone line carrying many simultaneous conversations, with a regular tap on the wire to keep the line from going dead.

## Related Concepts

- [[gateway|API Gateway]]
- [[rest-api|REST API]]
- [[streaming-ui|Streaming UI]]
- [[client-connection|Client Connection]]
