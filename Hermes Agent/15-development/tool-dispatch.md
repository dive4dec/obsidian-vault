---
tags: [Development-&-Contributing]
domain: Development & Contributing
---

# Tool Dispatch

> **Domain:** [[_development-contributing-moc|Development & Contributing]]

## Motivation

The process of executing tool calls from the model. handle_function_call() in model_tools.py. Routes to the correct tool handler.

## Concrete Example

Model calls: terminal(command=ls -la). handle_function_call routes to terminal handler. Handler executes ls -la. Returns: file listing. Result appended to conversation.

## Analogy

A switchboard operator - you say connect me to billing, they route your call to the billing department. Tool dispatch routes model requests to the correct tool handler.

## Related Concepts

- [[agent-loop|Agent Loop]]
- [[tool-registry|Tool Registry]]
- [[tool-calling|Tool Calling]]
