---
tags: [CLI-&-Commands]
domain: CLI & Commands
---

# Model Flag

> **Domain:** [[_cli-commands-moc|CLI & Commands]]

## Motivation

The --model flag (or -m) lets you override the model for just this one session, without changing your config. Handy when a task needs a stronger or cheaper model temporarily.

## Concrete Example

You run hermes chat -m anthropic/claude-sonnet-4. This session uses Claude, but your default stays DeepSeek.

## Analogy

Like renting a bigger locker for one day. Tomorrow, you are back to your regular one.

## Related Concepts

- [[model-config|Model Config]]
- [[hermes-model|Hermes Model]]
- [[global-flags|Global Flags]]
