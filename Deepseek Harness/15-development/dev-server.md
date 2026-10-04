---
tags: [DSH-Development]
domain: Development & Internals
---

# Dev Server

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

For dsh development, the "dev server" is running the launcher against TypeScript source: `pnpm dsh <args...>` from the repository root executes the entry and forwards every argument, versus the built artifacts a production run requires. The Web profile then serves the GUI with its HMR and plugin-management behavior intact.

## Concrete Example

`pnpm dsh web --port 8080` boots the Web profile from source; `--port` is an app argument the launcher hands through because it is the first token the launcher does not recognize.

## Analogy

It is idling the car in the garage to work on the engine before the road trip.

## Related Concepts

- [[build|Building]]
- [[hot-reload|Hot Reload]]
- [[dev-experience|Developer Experience]]
