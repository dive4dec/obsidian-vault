---
tags: [DSH-Development]
domain: Development & Internals
---

# Typert Protocol

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

`@deepseek-ai/dsh-typert-protocol` is the shared Remote protocol: the `@Remote` and `@RemoteScope` decorators, wire descriptors, codecs, and provider contracts used by business packages, generated artifacts, the Host Gateway, and the Client API. It keeps strict reflection in the compiler — decorator initializers retain minimal markers in a versioned descriptor, and the Typert build pipeline supplies the full `InvocationDescriptor`.

## Concrete Example

`import { Remote, TypertRemoteService } from '@deepseek-ai/dsh-typert-protocol'`; mark a method `@Remote` (add `signal: AbortSignal` as the final parameter for cooperative cancellation), and failures cross the wire as `RemoteError` with stable `<domain>/<reason>` codes such as `goal/not-found`.

## Analogy

It is the wire protocol's grammar: the decorators are verbs, the registry is the dictionary, and the Gateway is the post office.

## Related Concepts

- [[typert|Typert]]
- [[typert-loader|Typert Loader]]
- [[architecture|Architecture]]
