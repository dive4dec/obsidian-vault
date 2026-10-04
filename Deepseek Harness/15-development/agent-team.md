---
tags: [DSH-Development]
domain: Development & Internals
---

# Agent Team (Exp)

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

`@deepseek-ai/dsh-experimental-agent-team` turns one coding session into a small working team: the session's agent becomes the Lead, creates named teammates, exchanges durable messages, and tracks shared tasks on a common board. Messages and task state survive crashes and reloads, and teammates resume with their queued messages; all task changes are compare-and-set so two members cannot silently overwrite each other.

## Concrete Example

Mount `@deepseek-ai/dsh-session-persistence-jsonl`, `@deepseek-ai/dsh-experimental-agent-team`, and `@deepseek-ai/dsh-experimental-tool-agent-team` (the package ships no tools of its own); defaults are `maxMembers: 16`, `maxTasks: 256`, `maxMessageBytes: 65536`.

## Analogy

It is a standup board for subagents: persistent inboxes, a shared task list, and one Lead who assigns work.

## Related Concepts

- [[experimental|Experimental]]
- [[testing|Testing]]
- [[extending|Extending dsh]]
