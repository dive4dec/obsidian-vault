---
tags: [CLI-&-Commands]
domain: CLI & Commands
---

# Profile Flag

> **Domain:** [[_cli-commands-moc|CLI & Commands]]

## Motivation

The --profile flag (or -p) tells Hermes to use a named profile for this session. This overrides the default profile, so you can switch contexts with one flag.

## Concrete Example

You run hermes -p school. This session uses the school profile: its model, memory, and sessions. Your personal profile is untouched.

## Analogy

Like swiping a different Octopus card. Same gate, different account.

## Related Concepts

- [[profiles|Profiles]]
- [[hermes-profile|Hermes Profile]]
- [[hermes_home|HERMES_HOME]]
