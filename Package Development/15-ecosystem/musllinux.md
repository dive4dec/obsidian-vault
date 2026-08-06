---
tags: [Package-Ecosystem]
domain: Package Ecosystem
---

# musllinux

> **Domain:** [[_ecosystem-moc|Package Ecosystem]]

## 🎯 Motivation

`musllinux` is a wheel standard for Linux distributions using `musl` libc, like Alpine Linux. Without musllinux wheels, Alpine users must compile packages from source, which is slow and sometimes fails.

## 📋 Concrete Example

Alpine uses `musl` instead of `glibc`, so a `manylinux` wheel will not load. Publishing a `musllinux_1_2_x86_64.whl` alongside your `manylinux` wheel gives Alpine users a fast, pre-built binary.

## 🔗 Analogy

A key cut for a standard lock will not open a different lock brand. musllinux is a second key cut for Alpine's "lock." Carrying both keys means you can enter either building.

## Related Concepts

- [[manylinux|manylinux]]
- [[platform-wheels|Platform Wheels]]
- [[abi-wheels|ABI Wheels]]
