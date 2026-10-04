---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# API Versioning

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

The client and Host must agree on the same wire contract: both sides consume the same generated `InvocationDescriptor` contract from the API Gateway, and strict mode reads generated descriptors from `ctx.typert.local`. Withdrawing an observed strict definition fails instead of weakening validation, so a client and host from mismatched builds cannot silently misinterpret each other.

## Concrete Example

`dsh-api-remotes` imports generated `/remote` artifacts as runtime values, so the client half and the Host half stay bound to one shared declaration.

## Analogy

Two translators working from the same published dictionary; a missing page stops the meeting rather than inventing words.

## Related Concepts

- [[gateway|API Gateway]]
- [[api-remotes|Remotes API]]
- [[rest-api|REST API]]
- [[client-connection|Client Connection]]
