---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# Scripting dsh

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

Because headless prints its final answer to stdout and exits with a meaningful code, you can feed `dsh --profile headless` into shell scripts and CI pipelines. The invoking directory becomes the workspace root, so a script can also operate on its own working tree.

## Concrete Example

`dsh --profile headless "run the tests and report failures" && echo PASS` only prints PASS when the run exits zero.

## Analogy

Plugging the agent into the conveyor belt instead of keeping it at a workbench.

## Related Concepts

- [[ci-usage|CI Usage]]
- [[batch-mode|Batch Mode]]
- [[command-shortcuts|Shell Shortcuts]]
