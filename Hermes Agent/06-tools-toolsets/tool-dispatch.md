---
tags: [Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Tool Dispatch

> **Domain:** [[_tools-toolsets-moc|Tools & Toolsets]]

## Motivation

The process of routing a tool call to the correct handler. Located in model_tools.py. Called when the model outputs a tool_call.

## Concrete Example

Model calls: terminal(command=ls). handle_function_call routes to terminal handler. Handler executes ls. Returns: file listing. Result appended to conversation.

## Analogy

A switchboard operator - you say connect me to billing, they route your call. Tool dispatch routes model requests to the correct tool handler.

## Related Concepts

- [[tool-calling|Tool Calling]]
- [[tool-registry|Tool Registry]]
- [[tool-handler|Tool Handler]]
