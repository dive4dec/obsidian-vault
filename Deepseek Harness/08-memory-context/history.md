---
tags: [DSH-Memory-&-Context]
domain: Memory & Context
---

# Message History

> **Domain:** [[_dsh-memory-context-moc|Memory & Context]]

## Motivation

The stored messages of a session, held in the durable session log. History is what compaction condenses and what the token meter replays to measure pressure; condensed spans are replaced by a summary while recent history stays intact. Because the log is authoritative, replaying a session deterministically reproduces the same conversation.

## Concrete Example

`dsh-compaction` replaces a selected older span with one summary message and reports which history was condensed and the estimated tokens freed, while `dsh-session-projection` derives current state such as conversation statistics from committed events.

## Analogy

The running transcript of a conversation — older entries get summarized in a recap, but the full record is still filed away.

## Related Concepts

- [[message|Message]]
- [[summary|Summary]]
- [[windowing|Windowing]]
- [[compaction|Compaction]]
