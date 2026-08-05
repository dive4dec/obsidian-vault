---
tags: [Installation-&-Setup]
domain: Installation & Setup
---

# Systemd Linger

> **Domain:** [[_installation-setup-moc|Installation & Setup]]

## Motivation

On Linux, if you log out, your background services may stop. Enabling linger with loginctl lets your user services keep running even when you are logged out. This is needed for a 24/7 gateway.

## Concrete Example

You run sudo loginctl enable-linger alex. Now your Hermes gateway stays on after you close your SSH session.

## Analogy

Like telling the school guard to keep the lights on in your club room even after you leave campus.

## Related Concepts

- [[systemd-service|Systemd Service]]
- [[gateway-service|Gateway Service]]
