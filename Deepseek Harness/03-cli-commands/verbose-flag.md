---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# Verbose Output

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

Debug and verbose flags exist for boot and agent runs, letting you see more of what the launcher and the profile are doing. For boot diagnostics, plugin-manager service calls retain their captured diagnostics even when the forwarded command runs with a scrubbed environment.

## Concrete Example

Run a headless job with verbose output to watch the boot sequence, then compare against `--dump-config` output to check the composed tree.

## Analogy

Turning the car's dashboard lights up while you drive to see what the engine is doing.

## Related Concepts

- [[debug-mode|Debug Mode]]
- [[cli-errors|CLI Errors]]
- [[config-dump|Config Dump]]
