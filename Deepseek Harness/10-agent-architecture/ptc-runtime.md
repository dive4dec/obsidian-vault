---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# PTC Runtime

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

The PTC runtime is the abstract execution seam for running one model-written program against host-provided asynchronous functions through a configured backend. `dsh-ptc-runtime` returns a lossless-JSON value, ordered per-channel logs, or a structured error; program failures resolve in the result while rejected promises indicate caller misuse. It has no knowledge of tools or sessions and isolates each run from prior runs.

## Concrete Example

`dsh-ptc-runtime-node` is a concrete backend that executes model-written TypeScript in a fresh Node process under the same filesystem sandbox policy as Bash.

## Analogy

A secure booth where the model's program runs against a fixed set of host-provided plugs.

## Related Concepts

- [[workflow-ptc|Workflow PTC]]
- [[workflow|Workflow]]
- [[agent-safety|Agent Safety]]
