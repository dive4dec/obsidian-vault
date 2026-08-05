---
tags: [Development-&-Contributing]
domain: Development & Contributing
---

# Adding a Slash Command

> **Domain:** [[_development-contributing-moc|Development & Contributing]]

## Motivation

Creating a new slash command: 1) Add CommandDef to COMMAND_REGISTRY. 2) Add handler in process_command(). 3) Optionally add gateway handler.

## Concrete Example

1) commands.py: CommandDef(name=/weather, description=..., handler=...). 2) cli.py: process_command handles /weather. 3) Gateway: handle /weather in gateway/run.py. New command ready.

## Analogy

Adding a new shortcut on your keyboard - you map a key combination to an action. Adding a slash command maps a /command to a handler.

## Related Concepts

- [[commands-registry|Commands Registry]]
- [[slash-commands|Slash Commands]]
- [[cli|CLI]]
