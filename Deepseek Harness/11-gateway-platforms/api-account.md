---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Account Controller

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-api-account-controller` backs the account screens with authenticated Remote commands and a snapshot stream. It exposes login state without returning tokens or PKCE secrets, so the browser can render whether the operator is signed in and act on it, while the secret material stays Host-side.

## Concrete Example

The account settings panel shows the signed-in state from the controller's snapshot stream; tokens and PKCE secrets never cross to the client.

## Analogy

A badge scanner that tells you the person is cleared for the floor, without showing the badge number.

## Related Concepts

- [[api-settings|Settings Controller]]
- [[api-session|Session Controller]]
- [[gateway-security|Gateway Security]]
- [[gateway|API Gateway]]
