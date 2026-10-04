---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# Debug Mode

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

Debugging a dsh run means separating what the launcher decided from what the profile did. The config-dump flags inspect the composed tree without booting, while plugin-manager service calls keep captured diagnostics you can inspect after the fact.

## Concrete Example

When a custom profile misbehaves, run `dsh --profile <name> --dump-config` to see its composed layers before you boot it at all.

## Analogy

Checking the blueprint before you blame the construction crew.

## Related Concepts

- [[verbose-flag|Verbose Output]]
- [[config-dump|Config Dump]]
- [[cli-errors|CLI Errors]]
