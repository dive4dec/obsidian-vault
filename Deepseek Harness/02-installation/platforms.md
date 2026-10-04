---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Platforms

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

dsh supports a range of platforms, with native capability varying by OS. Linux has prebuilt Landlock/flock addons (`node-addon-system-linux-x64`), Windows uses the `dsh-win32-process` primitives and ACL sandbox, and macOS ships its own `system.node`. A developer cares because sandboxing and native behavior differ per platform.

## Concrete Example

Linux x64 uses `@deepseek-ai/node-addon-system-linux-x64`; Windows uses `@deepseek-ai/dsh-win32-process`; macOS has `bin/system.node`.

## Analogy

Like one product line with a different adapter plug for each country.

## Related Concepts

- [[linux-x64|Linux x64]]
- [[windows-support|Windows Support]]
- [[macos|macOS]]
