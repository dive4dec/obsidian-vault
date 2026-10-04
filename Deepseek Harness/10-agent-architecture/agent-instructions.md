---
tags: [DSH-Agent-Architecture]
domain: Agent Architecture
---

# Agent Instructions

> **Domain:** [[_dsh-agent-architecture-moc|Agent Architecture]]

## Motivation

Workspace instructions are project and user-global guidance the agent loads from `AGENTS.md`-compatible files. `dsh-agent-instructions` loads the applicable chain for the first request and refreshes it on successful filesystem operations and on session resume; `dsh-base` enables it by default and a byte budget bounds the injected context, so broader files are omitted before the most specific file is truncated.

## Concrete Example

A project `AGENTS.md` (or `CLAUDE.md`) is discovered and injected as lower-authority workspace guidance; an empty chain adds nothing, and content is bounded, never summarized.

## Analogy

A sticky note on the wall of the workspace telling the worker how things are done here.

## Related Concepts

- [[system-prompt|System Prompt]]
- [[agent-context|Agent Context]]
- [[agent-prompt|Agent Prompt]]
