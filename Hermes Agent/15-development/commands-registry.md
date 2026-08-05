---
tags: [Development-&-Contributing]
domain: Development & Contributing
---

# Commands Registry

> **Domain:** [[_development-contributing-moc|Development & Contributing]]

## Motivation

The central registry of slash commands. Located in hermes_cli/commands.py. All consumers derive from it.

## Concrete Example

COMMAND_REGISTRY: [/new, /reset, /clear, /model, /tools, /skills, ...]. The registry is the single source of truth. Autocomplete, /help, Telegram menu, Slack mapping - all read from it.

## Analogy

A master key list - one list of all keys and what they do. Every door lock (interface) checks the same list. The commands registry is the master key list for slash commands.

## Related Concepts

- [[adding-a-slash-command|Adding a Slash Command]]
- [[slash-commands|Slash Commands]]
- [[cli|CLI]]
