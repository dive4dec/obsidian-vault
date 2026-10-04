---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Native Addons

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

Native addons are the compiled modules dsh uses for OS-specific capabilities: `node-addon-system` is the JavaScript entry for the prebuilt Landlock launcher and async POSIX flock, and per-platform packages (like `node-addon-system-linux-x64`) carry the binaries. A developer cares because sandboxing and file locking depend on these loading for the right OS/CPU.

## Concrete Example

`node-addon-system` exports the `./landlock-run` launcher path and `./flock` (`tryLockExclusive(fd)`); platform packages ship the `system.node` / `landlock-run` binaries.

## Analogy

Like the specialized hardware parts bolted into the software shell.

## Related Concepts

- [[linux-x64|Linux x64]]
- [[platforms|Platforms]]
- [[node-runtime|Node Runtime]]
