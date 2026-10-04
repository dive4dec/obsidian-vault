---
tags: [DSH-Development]
domain: Development & Internals
---

# Semantic Versioning

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

dsh packages use SemVer ranges as their compatibility language: a plugin's `engines.dsh` field declares the host versions it supports, including exact prerelease versions like `0.1.5-alpha.1`. The manifest's `dsh.manifestVersion` is deliberately independent of the npm package version and the Session format version, so format, package, and runtime versions evolve separately.

## Concrete Example

A profile with `engines: { dsh: '0.1.5-alpha.1' }` is rejected at install and startup unless the runtime from `dsh --version` matches the range or an exact `package-name@version` exemption exists in `compatibility.json`.

## Analogy

It is the size of a plug and socket: the number on the box decides whether it fits, and no one rewires the wall.

## Related Concepts

- [[peer-deps|Peer Dependencies]]
- [[package-manifest|Package Manifest]]
- [[release|Releasing]]
