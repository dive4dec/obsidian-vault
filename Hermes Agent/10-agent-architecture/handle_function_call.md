---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# handle_function_call

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

This step takes a single tool call from the model, runs the actual tool function, and returns the result back to the conversation.

## Concrete Example

The model calls read_file. handle_function_call opens the file, reads the content, and hands the text back as a tool result message.

## Analogy

Like a librarian fetching a book you requested: you ask, they go get it, and hand it to you.

## Related Concepts

- [[tool-dispatch|tool dispatch]]
- [[tool_call-response|tool_call response]]
- [[text-response|text response]]
