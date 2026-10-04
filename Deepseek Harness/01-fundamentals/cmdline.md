---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# cmdline (dsh-cmdline)

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

`dsh-cmdline` is the shared immutable CLI snapshot parsed by the launcher and handed to the booted profile's app plugins. The launcher makes `ctx.cmdlineArgs` (the inner arguments, read-only, never consumed), `ctx.appExit` (request process exit through the launcher's shutdown path), and `ctx.appReady` (successful-startup signal) available before the tree mounts. Multiple plugins can read the same arguments, each parsing what it needs; a flag beats the value written beside a `!!js` expression in config.

## Concrete Example

`dsh --profile tui --resume abc` gives the app `['--resume', 'abc']` via `ctx.cmdlineArgs`.

## Analogy

It is the message left on the desk for whoever starts the shift — anyone may read it, no one erases it.

## Related Concepts

- [[app-arguments|App Arguments]]
- [[dsh-command|The dsh Command]]
- [[entry-modes|Entry Modes]]
