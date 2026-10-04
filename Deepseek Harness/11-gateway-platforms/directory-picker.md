---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Directory Picker

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-host-directory-picker` lets an operator choose a workspace directory with either an OS chooser or an in-app browser. Use the native option when the operator can reach the host display; use the browser option for remote clients or when directory listing and creation must stay in the app. Consumers receive the interaction kind and can present the matching workflow. Directory picking is limited to the GUI host and never affects the agent loop.

## Concrete Example

A remote client gets the in-app browser tree; a local operator gets the native OS chooser. The browser workflow exposes one directory tree at a time.

## Analogy

Two ways to point at a folder on the map: a local resident's shortcut, or a visitor's detailed street atlas.

## Related Concepts

- [[remote-access|Remote Access]]
- [[open-in-app|Open in App]]
- [[sidebar|Sidebar]]
- [[api-workspace|Workspace Controller]]
