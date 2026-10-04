---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Security

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Skill security governs how untrusted or third-party skills are handled. In dsh, a skill's effects run under the session's file/process sandbox, its invocation policy controls which surfaces may load it, and the registry re-validates a loaded definition before accepting it. Bundled providers like `dsh-skill-badge` are immutable and register a fixed candidate, limiting attack surface.

## Concrete Example

A `dsh-skill-office` script that writes a file is confined by the workspace-write sandbox, and a skill with `disable-model-invocation: true` cannot be triggered by the model at all.

## Analogy

A locked pantry so a visiting cook can only use what you've left out.

## Related Concepts

- [[skill-sandbox|Skill Sandbox]]
- [[skill-permission|Skill Permission]]
- [[skill-errors|Skill Errors]]
- [[skill-debug|Debug a Skill]]
