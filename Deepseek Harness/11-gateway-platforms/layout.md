---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Layout

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-client-ui-layout` provides the web GUI's three-column AppFrame, edge-column widths, and `ctx.layout` presentation control. The right column concedes space before the center, and its occupant renders fullscreen while the frame retains the wide-screen track underneath. Layout state resets on reload.

## Concrete Example

Expanding a right-column panel widens it at the center column's expense; collapsing it restores the default tracks.

## Analogy

A three-drawer filing cabinet with a sliding glass door you can swing fully open.

## Related Concepts

- [[theme|Theme]]
- [[sidebar|Sidebar]]
- [[chat-ui|Chat UI]]
- [[client-hmr|Client HMR]]
