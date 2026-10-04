---
tags: [DSH-Installation]
domain: Installation & Setup
---

# WSL

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

WSL lets you run dsh under Windows Subsystem for Linux, where it behaves as a Linux x64 install rather than a native Windows one. That means the Linux `node-addon-system-linux-x64` native addons (Landlock/flock) apply. A developer cares because WSL changes which native path and which sandbox model are in play.

## Concrete Example

Under WSL, dsh runs the Linux x64 path, using `node-addon-system-linux-x64` rather than `dsh-win32-process`.

## Analogy

Like running the Linux edition of the software inside a Windows window.

## Related Concepts

- [[platforms|Platforms]]
- [[linux-x64|Linux x64]]
- [[windows-support|Windows Support]]
