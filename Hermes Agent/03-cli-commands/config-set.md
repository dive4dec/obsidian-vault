---
tags: [CLI-&-Commands]
domain: CLI & Commands
---

# Config Set

> **Domain:** [[_cli-commands-moc|CLI & Commands]]

## Motivation

hermes config set KEY VALUE changes one setting at a time from the command line. It is safer than editing the whole file, because it only touches the key you name.

## Concrete Example

You run hermes config set memory.memory_enabled true. Memory is now on. No need to open an editor.

## Analogy

Like adjusting the volume with a button instead of opening the sound menu.

## Related Concepts

- [[hermes-config|Hermes Config]]
- [[config-edit|Config Edit]]
- [[config-check|Config Check]]
