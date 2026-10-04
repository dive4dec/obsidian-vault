---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Installing dsh

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

Installing dsh puts the `dsh` launcher on your PATH. It is the sole supported Node application launcher for DeepSeek agent profiles, so every entry mode (`dsh web`, `dsh --profile headless`, `dsh --profile sdk`) flows through this one command. A developer cares because nothing else starts a profile.

## Concrete Example

`dsh` is published as the `bin` of the `@deepseek-ai/dsh` npm package (version 0.2.0-rc.1); the Python runtime wheel packages this same command.

## Analogy

Like installing a universal remote that controls every device in the room.

## Related Concepts

- [[verify-install|Verify Install]]
- [[node-runtime|Node Runtime]]
- [[prerequisites|Prerequisites]]
