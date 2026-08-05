---
tags: [CLI-&-Commands]
domain: CLI & Commands
---

# Toolsets Flag

> **Domain:** [[_cli-commands-moc|CLI & Commands]]

## Motivation

The --toolsets flag (or -t) lets you pick exactly which toolsets are active for this session. You pass a comma-separated list. This overrides your default toolset config.

## Concrete Example

You run hermes chat -t terminal,file. Only terminal and file tools are available. No web, no browser, locked down.

## Analogy

Like choosing only pens and pencils for an exam, leaving the calculator behind.

## Related Concepts

- [[toolsets|Toolsets]]
- [[hermes-tools|Hermes Tools]]
- [[global-flags|Global Flags]]
