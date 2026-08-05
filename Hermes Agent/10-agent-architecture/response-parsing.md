---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# Response Parsing

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

After the model returns a response, Hermes parses it to find tool calls, text, or reasoning blocks.

## Concrete Example

The response has a tool_call block and a text block. Hermes separates them, runs the tool, and shows the text.

## Analogy

Like sorting mail into bills, letters, and ads so each type goes to the right place.

## Related Concepts

- [[tool_call-response|tool_call response]]
- [[text-response|text response]]
- [[handle_function_call|handle_function_call]]
