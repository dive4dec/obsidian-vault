---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# REST API

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

The web host exposes an HTTP API under `/api`: Connection passes a composite handler through its HTTP bridge that dispatches claimed endpoints to the API Gateway and returns 404 for unclaimed requests. This is how exact Fetch routes and unary Remote calls cross from the browser to the Host.

## Concrete Example

A client Fetch to a named `/api` route reaches the matching Remote service only after `dsh-api-gateway` validates the exact named arguments; unclaimed endpoints 404.

## Analogy

The front desk phone line: you dial an extension, and it either reaches the person or tells you no one is there.

## Related Concepts

- [[gateway|API Gateway]]
- [[client-connection|Client Connection]]
- [[websocket|WebSocket]]
- [[api-versioning|API Versioning]]
