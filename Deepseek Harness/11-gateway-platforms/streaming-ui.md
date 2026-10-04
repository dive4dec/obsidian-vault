---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Streaming UI

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

Streaming in the web UI rides the API Gateway's multiplexed WebSocket: Remote streams in `@Remote({ mode: 'stream' })` form return an `Iterable` or `AsyncIterable`, and `ctx.typertGateway.stream()` yields a cancellation-aware iterable over the business items. The chat renderer consumes these to show model output as it arrives, with work-details modes controlling how much of the process is visible.

## Concrete Example

A streaming Remote method's items reach the browser over the open `/api/remote.mux` socket, each independently cancellable on its logical stream.

## Analogy

Live captions at a play: you read each line as it's spoken, not the printed script after the curtain.

## Related Concepts

- [[websocket|WebSocket]]
- [[chat-ui|Chat UI]]
- [[gateway|API Gateway]]
- [[client-connection|Client Connection]]
