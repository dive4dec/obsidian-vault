---
tags: [CLI-&-Commands]
domain: CLI & Commands
---

# Yolo Flag

> **Domain:** [[_cli-commands-moc|CLI & Commands]]

## Motivation

The --yolo flag skips all command approval prompts. Hermes will run any command, including risky ones, without asking. Use it only when you fully trust the task.

## Concrete Example

You run hermes --yolo and ask it to clean up temp files. Hermes runs rm commands without pausing to confirm each one.

## Analogy

Like a green light at every intersection. Fast, but you better be a careful driver.

## Related Concepts

- [[yolo-mode|Yolo Mode]]
- [[command-approval|Command Approval]]
- [[global-flags|Global Flags]]
