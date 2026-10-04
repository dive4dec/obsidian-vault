---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# v2→v3 Migration

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

`dsh-session-format-v2-to-v3` restores supported released V2 Sessions as V3 without changing historical request meaning. It promotes system prompts into messages, remaps local event references, translates PTC and preset names, and canonicalizes envelopes. The library documents what it preserves and what it refuses, and persistence consumes it through the static catalog.

## Concrete Example

The edge carries delivery guards and a source audit that refuses non-conforming records, while remapping sequence references and inheritance metadata.

## Analogy

A transcoder that rewrites the container and header while keeping the footage identical.

## Related Concepts

- [[migration-v1-v2|v1→v2 Migration]]
- [[migration-v3-v4|v3→v4 Migration]]
- [[format-migration|Format Migration]]
