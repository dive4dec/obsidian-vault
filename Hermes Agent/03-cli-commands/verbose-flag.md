---
tags: [CLI-&-Commands]
domain: CLI & Commands
---

# Verbose Flag

> **Domain:** [[_cli-commands-moc|CLI & Commands]]

## Motivation

The --verbose flag (or -v) makes Hermes print extra detail: tool calls, timings, and internal steps. It is useful for learning how Hermes works or debugging a problem.

## Concrete Example

You run hermes chat -v. Now each tool call prints its name, arguments, and result before Hermes continues.

## Analogy

Like a teacher showing every step of a maths solution, not just the answer.

## Related Concepts

- [[quiet-flag|Quiet Flag]]
- [[hermes-chat|Hermes Chat]]
- [[global-flags|Global Flags]]
