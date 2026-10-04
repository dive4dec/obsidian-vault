---
tags: [DSH-Development]
domain: Development & Internals
---

# Auto Review (Exp)

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

`@deepseek-ai/dsh-experimental-auto-review` adds per-call Auto review to a Web profile's permission pickers: before each native or PTC inner tool call, the current agent's model assesses the pending action, an allowed call executes with Full access, and a denied call asks the user. It is shipped switched off, and the README is explicit that it can allow unsafe actions, deny useful work, and spend extra tokens.

## Concrete Example

`pnpm dsh plugin --profile web add ./packages/experimental/auto-review` installs the layer, then selecting `Auto review` (superscript `EXP` badge) in the composer or `/permission` picker switches the session to the `ask` approval policy; delegated in-process children pin `never`, so their denials are final.

## Analogy

It is a second pair of eyes that rubber-stamps safe moves and flags risky ones before anything executes.

## Related Concepts

- [[experimental|Experimental]]
- [[extending|Extending dsh]]
- [[testing|Testing]]
