---
tags: [Development-&-Contributing]
domain: Development & Contributing
---

# Prompt Builder

> **Domain:** [[_development-contributing-moc|Development & Contributing]]

## Motivation

Code in agent/prompt_builder.py that constructs the system prompt. Combines: identity, tools, memory, environment, skills, configuration.

## Concrete Example

build_system_prompt(): 1) Identity (You are Hermes). 2) Tool schemas. 3) Memory (MEMORY.md, USER.md). 4) Environment hints (OS, cwd). 5) Skills. 6) Config. All combined into one prompt.

## Analogy

A chef assembling a plate - they combine meat, vegetables, sauce, and garnish into one dish. The prompt builder combines identity, tools, memory, and context into one prompt.

## Related Concepts

- [[system-prompt|System Prompt]]
- [[agent-loop|Agent Loop]]
- [[environment-hints|Environment Hints]]
