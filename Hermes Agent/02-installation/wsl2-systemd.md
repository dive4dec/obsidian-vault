---
tags: [Installation-&-Setup]
domain: Installation & Setup
---

# WSL2 Systemd

> **Domain:** [[_installation-setup-moc|Installation & Setup]]

## Motivation

WSL2 needs systemd=true in /etc/wsl.conf for systemd services to work. Without it, the gateway falls back to nohup and may stop when you close the WSL window.

## Concrete Example

You add [boot] systemd=true to /etc/wsl.conf, restart WSL, and now hermes gateway install works properly.

## Analogy

Like enabling the engine mode in a remote-control car. Without it, the car runs but cannot use advanced features.

## Related Concepts

- [[wsl2-install|WSL2 Install]]
- [[systemd-service|Systemd Service]]
