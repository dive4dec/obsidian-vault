---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Linux x64

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

Linux x64 support ships as the `node-addon-system-linux-x64` platform package, which contains the static musl `landlock-run` executable plus glibc and musl `system.node` Node-API addons. The entry picks the addon matching the running Node's libc. A developer cares because this is what backs Landlock-based sandboxing and async POSIX flock on Linux.

## Concrete Example

`@deepseek-ai/node-addon-system-linux-x64` carries `bin/landlock-run` and `bin/glibc/system.node` / `bin/musl/system.node`.

## Analogy

Like a region-specific driver that auto-selects the right flavor for your system.

## Related Concepts

- [[platforms|Platforms]]
- [[node-addon|Native Addons]]
- [[permissions-setup|Permissions Setup]]
