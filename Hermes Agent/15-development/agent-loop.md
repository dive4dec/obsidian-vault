---
tags: [Development-&-Contributing]
domain: Development & Contributing
---

# Agent Loop

> **Domain:** [[_development-contributing-moc|Development & Contributing]]

## Motivation

The core conversation loop. run_conversation() in run_agent.py. The heart of Hermes.

## Concrete Example

Loop: 1) Build system prompt. 2) Call LLM with messages + tools. 3) If tool_calls -> dispatch each -> append results -> continue. 4) If text response -> return. 5) Repeat until max_turns or text response.

## Analogy

A conversation at a help desk - you ask, the helper checks resources (tools), responds, you ask again. The loop continues until your question is answered. The agent loop is the Hermes help desk conversation.

## Related Concepts

- [[project-layout|Project Layout]]
- [[system-prompt|System Prompt]]
- [[tool-dispatch|Tool Dispatch]]
