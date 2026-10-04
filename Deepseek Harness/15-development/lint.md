---
tags: [DSH-Development]
domain: Development & Internals
---

# Lint

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

Linting in dsh enforces the conventions the monorepo relies on: the uniform package README shape (Summary, Use this package, Model Experience, Known Limitations), the no-runtime-invariant-companion policy for stateless packages, and wire-name grammar that `isTypertRemoteSegment()` validates for Typert namespaces, methods, lookups, and Context segments.

## Concrete Example

A Typert wire name failing `isTypertRemoteSegment()` is rejected at registration, so generated names cross the shared RPC carrier unchanged; a manifest field crossing from build artifact into the typed registry is checked field-by-field by `validateTypertManifest()`.

## Analogy

It is the style desk that keeps every package's paperwork in the same filing format.

## Related Concepts

- [[type-check|Type Check]]
- [[contributing|Contributing]]
- [[doc|Documentation]]
