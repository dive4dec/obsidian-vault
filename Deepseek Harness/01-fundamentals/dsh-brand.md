---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Brand

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

`dsh-brand` makes structurally identical strings or numbers non-interchangeable at the type level, so a `SessionId` cannot be passed where a `ToolCallId` is expected and an event sequence cannot be passed where a log offset is required. `brandString<T>()` and `brandNumber<T>()` apply nominal brands with no shared runtime state; the brand symbol is erased by TypeScript, so branded values serialize, log, and cross the wire as ordinary values. Developers care because it lets each package own a domain type without importing an unrelated capability.

## Concrete Example

```ts
import { brandString, type Branded } from '@deepseek-ai/dsh-brand'
export type SessionId = Branded<'SessionId'>
```

## Analogy

It is a special ink that only certain stamps accept — same paper, but the wrong stamp won't take it.

## Related Concepts

- [[base-package|dsh-base]]
- [[invariants|Invariants]]
