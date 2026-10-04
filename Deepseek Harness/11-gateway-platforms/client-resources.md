---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Client Resources

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-client-resources` is the client resource model for data a component knows only by URL address while another client package owns the data. Resource addresses use `dsh-resource://<type>/…`, and components receive the current value plus later updates through the public `useResource` hook. Non-resource schemes such as `sidebar://guide` resolve to no resource.

## Concrete Example

A sidebar row for a tab record holds a `dsh-resource://` address, and `useResource` hands it the live value and re-renders on updates.

## Analogy

A library catalog card that points at a live shelf: the card doesn't hold the book, it always shows the current copy.

## Related Concepts

- [[client-store|Client Store]]
- [[client-modules|Client Modules]]
- [[sidebar|Sidebar]]
- [[client-connection|Client Connection]]
