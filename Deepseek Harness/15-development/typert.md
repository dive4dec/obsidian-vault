---
tags: [DSH-Development]
domain: Development & Internals
---

# Typert

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

Typert is dsh's type-reflection pipeline that turns TypeScript declarations into generated wire artifacts for Remote calls between the Host and browser Client. The subsystem spans `@deepseek-ai/dsh-typert-protocol` (decorators and contracts), `@deepseek-ai/dsh-typert-loader` (auto-registration of generated artifacts), and `@deepseek-ai/dsh-typert-registry` (the runtime store behind `ctx.typert`).

## Concrete Example

A service extends `TypertRemoteService` and marks a method with `@Remote`; the generated `./typert` export is discovered by `dsh-typert-loader` when the package mounts, and stored in `dsh-typert-registry` under keys like `<namespace>/<method>`.

## Analogy

It is the compiler-generated contract layer that lets the browser call Host methods as typed functions.

## Related Concepts

- [[typert-loader|Typert Loader]]
- [[typert-protocol|Typert Protocol]]
- [[architecture|Architecture]]
