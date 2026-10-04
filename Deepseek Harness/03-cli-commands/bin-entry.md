---
tags: [DSH-CLI-Commands]
domain: CLI & Commands
---

# bin Entry

> **Domain:** [[_dsh-cli-commands-moc|CLI & Commands]]

## Motivation

`src/bin.ts` is the entry point that loads only the selected runner, keeping boot time and the process's footprint tied to what you actually invoked rather than every possible profile. This is the runtime side of command dispatch.

## Concrete Example

Running `dsh --profile headless` means `src/bin.ts` loads the headless runner, not the web app's code.

## Analogy

Only unlocking the room you were told to enter, not the whole building.

## Related Concepts

- [[command-dispatch|Command Dispatch]]
- [[args-owner|args.ts]]
- [[command-grammar|Command Grammar]]
