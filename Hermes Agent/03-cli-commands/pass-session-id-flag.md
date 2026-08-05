---
tags: [CLI-&-Commands]
domain: CLI & Commands
---

# Pass Session ID Flag

> **Domain:** [[_cli-commands-moc|CLI & Commands]]

## Motivation

The --pass-session-id flag includes the session ID in the system prompt. This is mainly for advanced workflows where external tools need to know the session identifier.

## Concrete Example

You run hermes --pass-session-id. The session ID appears in the context, so a webhook or script can reference it.

## Analogy

Like wearing a name badge at a conference. Others can identify and reference you.

## Related Concepts

- [[session|Session]]
- [[global-flags|Global Flags]]
