---
tags: [DSH-Development]
domain: Development & Internals
---

# Releasing

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

Releasing dsh produces the built package and frontend artifacts that production runs require, plus the Python runtime wheel that packages the same `dsh` command. Release identity flows into telemetry: `DSH_APP_VERSION` names the running release in the product telemetry configuration, and the launcher's version is the anchor every peer-range check compares against.

## Concrete Example

`pnpm run build` from the repository root produces the artifacts a production run loads; `dsh --version` prints the runtime version used by install and startup peer-range enforcement.

## Analogy

It is the factory gate: nothing ships until the build passes and the version label is stamped.

## Related Concepts

- [[build|Building]]
- [[changelog|Changelog]]
- [[semver|Semantic Versioning]]
