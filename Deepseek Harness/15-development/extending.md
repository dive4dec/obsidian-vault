---
tags: [DSH-Development]
domain: Development & Internals
---

# Extending dsh

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

Extending dsh means adding capability as a plugin or bundle rather than forking the runtime: write a package with a `dsh.bundle.patch`, install it with `dsh plugin --profile <name> add <spec>`, and the Loader mounts its entries into the running composition. The experimental surface is the sanctioned path for unproven capability, and `config/examples/` ships opt-in overlays (GitHub review webhooks, memory MCP servers, runtime Cordis tools) that are never part of a default profile.

## Concrete Example

`pnpm dsh plugin --profile web add ./packages/experimental/auto-review` installs the Auto review layer and reconciliation activates its patch as a profile layer; a package without `dsh.bundle.patch` is only an installed dependency.

## Analogy

It is adding an app to a phone through the store instead of soldering a new board.

## Related Concepts

- [[plugin-development|Plugin Development]]
- [[experimental|Experimental]]
- [[extending|Extending dsh]]
