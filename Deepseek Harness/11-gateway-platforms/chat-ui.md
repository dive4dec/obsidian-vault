---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Chat UI

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-client-ui-chat` renders a browser chat from recorded Session conversations, including historical images, localized actions, and restored scroll position. Work-details modes control reasoning previews and process visibility without hiding final answers, and local transcript and steering submissions appear immediately, then disappear atomically when authoritative Session records arrive. The package does not assemble or modify model requests.

## Concrete Example

A queued submission shows instantly in the local surface and is replaced atomically by the recorded Session message once the Host confirms it.

## Analogy

A live ticker that shows your order the moment you place it, then swaps in the official confirmation when it lands.

## Related Concepts

- [[layout|Layout]]
- [[sidebar|Sidebar]]
- [[streaming-ui|Streaming UI]]
- [[deliverables|Deliverables]]
