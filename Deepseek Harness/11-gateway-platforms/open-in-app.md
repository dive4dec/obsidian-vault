---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Open in App

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-client-ui-open-in-app` is the browser surface of the open-in-app feature. A Session-header split button opens the current session's workspace directory (the summary's `cwd`) in the remembered application, and its chevron lists every catalog application the host probed as installed. Availability, icons, and launches come from the host routes of `dsh-host-open-in-app`; a host without the capability renders none of these controls.

## Concrete Example

In the right Sidebar's document preview, the "Open" split button opens the previewed file in its default application through the Session Remote.

## Analogy

A "send to my printer" button that only appears when the office actually has a printer.

## Related Concepts

- [[chat-ui|Chat UI]]
- [[deliverables|Deliverables]]
- [[sidebar|Sidebar]]
- [[directory-picker|Directory Picker]]
