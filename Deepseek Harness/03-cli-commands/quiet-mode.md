---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# Quiet Mode

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

Headless runs are already aimed at clean output: one final answer printed, then exit. When scripting, you want progress chatter out of stdout so the answer is easy to capture — quiet behavior keeps the stream clean for parsing.

## Concrete Example

Capture the printed final answer of `dsh --profile headless "..."` into a file; with no extra chatter, the file contains the answer.

## Analogy

A vending machine that prints only your receipt, not a narration of every internal step.

## Related Concepts

- [[batch-mode|Batch Mode]]
- [[scripting|Scripting dsh]]
- [[headless-command|dsh headless]]
