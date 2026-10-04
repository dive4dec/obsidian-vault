---
tags: [DSH-Development]
domain: Development & Internals
---

# Peer Dependencies

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

Installation and profile startup enforce declared DSH peer ranges against the same runtime version shown by `dsh --version`. An install command that names packages is checked before pnpm runs, so an incompatible DSH peer rejects the operation before anything is downloaded or built; git and tarball specs are judged after installation and rolled back on refusal.

## Concrete Example

A compatibility refusal carries the `incompatible-version` code with each refused package's `name`, `version`, `runtimeVersion`, and unsatisfied `peers`; the CLI remedy is `dsh plugin --profile <name> allow-version <pkg@ver> --dsh-version <runtime> --accept-risk`.

## Analogy

It is an airport check that scans your ticket before you board — the wrong ticket never even reaches the tarmac.

## Related Concepts

- [[semver|Semantic Versioning]]
- [[plugin-manager|Plugin Manager]]
- [[changelog|Changelog]]
