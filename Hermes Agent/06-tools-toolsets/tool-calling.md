---
tags: [Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Tool Calling

> **Domain:** [[_tools-toolsets-moc|Tools & Toolsets]]

## Motivation

The mechanism by which the LLM requests to use a tool. The model outputs a structured tool call; Hermes executes it and returns the result.

## Concrete Example

Model: I need to check the weather. call weather_api(city=HK). Hermes executes weather_api, gets 28C sunny, returns result. Model uses it to answer.

## Analogy

A customer ordering at a restaurant - they tell the waiter what they want. The waiter (Hermes) brings it. The model orders tools, Hermes executes them.

## Related Concepts

- [[tool-dispatch|Tool Dispatch]]
- [[tool-registry|Tool Registry]]
- [[toolsets|Toolsets]]
