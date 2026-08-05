---
tags: [Agent-Architecture]
domain: Agent Architecture
---

# Tool Dispatch

> **Domain:** [[_agent-architecture-moc|Agent Architecture]]

## Motivation

When the model asks to use a tool, tool dispatch figures out which tool to run and sends the request to it.

## Concrete Example

The model says use terminal with command ls. Tool dispatch finds the terminal tool, runs it, and collects the output.

## Analogy

Like a school office routing forms: you drop a form at the counter and the staff send it to the right department.

## Related Concepts

- [[handle_function_call|handle_function_call]]
- [[tool_call-response|tool_call response]]
- [[prompt-builder|prompt builder]]
