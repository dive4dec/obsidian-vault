---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# Serve the Web App

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

The Web profile is served by a web host (dsh-host-webserver) that the profile's bundles wire in; `dsh web` boots that host and the GUI behind it. Port behavior is the app's concern, not the launcher's.

## Concrete Example

Boot with `dsh web`, then reach the served GUI at the host's URL — the process keeps running until you stop it.

## Analogy

A shop that not only opens the door but staffs the counter until closing time.

## Related Concepts

- [[web-launch|Web Launch]]
- [[web-command|dsh web]]
- [[interactive-mode|Interactive Mode]]
