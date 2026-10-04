---
tags: [DSH-Sessions]
domain: Sessions & Persistence
---

# Session Title

> **Domain:** [[_dsh-sessions-moc|Sessions & Persistence]]

## Motivation

`dsh-session-title` gives each session a client-visible title from the first eligible human message, an optional async generator, or an explicit user rename. Accepted titles persist through replay, resume, and paging but never enter model input. Automatic generation never delays the main agent response, and newer title requests supersede older work.

## Concrete Example

Mount `@deepseek-ai/dsh-session-title` with required `fallbackMaxWords`, `fallbackMaxBytes`, and `maxTitleBytes`; a user rename pins the session until a deliberate `refresh()`.

## Analogy

The tab title of a browser window that follows the conversation's subject.

## Related Concepts

- [[session-title-llm|LLM Title]]
- [[session|Session]]
- [[session-projection|Session Projection]]
