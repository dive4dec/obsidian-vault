---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# DeepSeek Harness

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

DeepSeek Harness (`dsh`) is the product, and the `dsh` command is its sole supported Node application launcher. Profiles are ordered stacks of plugin-bundle patch layers under the user's own overrides, and SDK and ACP are profiles rather than separate public bins. `src/args.ts` owns the command grammar and `src/bin.ts` loads only the selected runner, so a developer cares about the launcher because every profile, tool, and setting flows through it.

## Concrete Example

`dsh --version` prints the runtime version used for peer-range checks, and `dsh web` boots the Web profile under `$DSH_HOME/profiles/web`.

## Analogy

It is the front door with a directory of rooms: one command, many differently furnished spaces behind it.

## Related Concepts

- [[dsh-command|The dsh Command]]
- [[profiles|Profiles]]
- [[entry-modes|Entry Modes]]
