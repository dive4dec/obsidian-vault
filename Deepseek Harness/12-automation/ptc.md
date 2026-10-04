---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# PTC

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

dsh-ptc-runtime is the abstract execution seam (ctx.ptcRuntime) that runs one model-written program against host-provided async bindings. A request resolves to a lossless-JSON value, ordered per-channel logs, or a structured error; each run is isolated from prior runs and knows nothing about tools or sessions.

## Concrete Example

dsh-ptc-runtime-node is the shipped backend: it runs TypeScript in fresh Node processes under the session sandbox with timeoutMs, maxOutputBytes, and a V8 heap limit, and workflow scripts execute through it.

## Analogy

A vending machine for code: insert a program and bindings, get back a value or a clearly labeled failure.

## Related Concepts

- [[workflow-ptc|Workflow PTC]]
- [[workflow|Workflow]]
- [[job|Job]]
- [[long-running|Long-Running]]
