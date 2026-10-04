---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Gateway Security

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

Auth and trust are enforced at the gateway edge. The web host starts with an authenticated URL, `dsh-host-frontend-static` requires a valid process token or browser cookie for the index (static assets stay public), the API Gateway registers a trusted-host interceptor on Connection's shared `/api` handler, and account data never leaks tokens or PKCE secrets to the client.

## Concrete Example

The startup URL `dsh --profile web` prints is authenticated, and the settings controller returns redacted settings and credential metadata without ever returning secret values.

## Analogy

The bouncer plus the safe: only admitted guests get in, and the vault contents never leave the building.

## Related Concepts

- [[gateway|API Gateway]]
- [[api-account|Account Controller]]
- [[frontend-static|Frontend Static]]
- [[client-connection|Client Connection]]
