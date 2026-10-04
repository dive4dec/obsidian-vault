---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# LLM Title

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

`dsh-session-title-llm` is the shared model-backed policy that generates concise session titles from selected human messages. The shipped providers, `dsh-session-title-first-prompt-llm` and `dsh-session-title-all-prompts-llm`, register through `registerSessionTitleLlmProvider`. Required limits cap the framed input, the generated output, and end-to-end duration; invalid, empty, late, or tool-call results are rejected.

## Concrete Example

Configure `targetWords`, `maxInputBytes`, `maxOutputTokens`, and `timeoutMs` (all required); without an explicit `provider`/`model` pair the helper reuses the route recorded in the session's logged `request/header`.

## Analogy

A co-writer that drafts the tab title from the first few lines of chat.

## Related Concepts

- [[session-title|Session Title]]
- [[session|Session]]
