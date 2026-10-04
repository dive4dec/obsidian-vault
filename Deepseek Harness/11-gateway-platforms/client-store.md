---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Client Store

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-client-store` provides React-free observable and snapshot-store primitives shared by Client controllers and renderer adapters. It owns synchronous and animation-frame publication, Immer-backed updates, shallow equality, and optional browser persistence; React hook construction stays in `dsh-client-ui-renderer`. Use it when Client state must publish stable snapshots without depending on React.

## Concrete Example

A controller publishes immutable snapshots through the store, and renderer adapters subscribe to them without any React import.

## Analogy

A blackboard with a strict writing rule: the board shows one clean state at a time, and viewers only ever read it.

## Related Concepts

- [[client-modules|Client Modules]]
- [[client-resources|Client Resources]]
- [[chat-ui|Chat UI]]
- [[layout|Layout]]
