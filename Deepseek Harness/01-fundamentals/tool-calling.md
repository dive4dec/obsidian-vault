---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Tool Calling

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

Tool calling is how the model requests a capability: it emits tool calls in its response, dsh validates and executes them through the `dsh-tools` pipeline, and feeds the results back into the session log for the next step. Parallel-safe calls may overlap up to `maxParallelToolCalls`; exclusive calls run alone as ordering barriers. A failing tool records an error result without ending the turn, so the model can react to the failure.

## Concrete Example

`dsh-tools` exposes typed capabilities with a name, description, and parameter schema; the base bundle mounts file editing (`read`, `write`, `edit`), shell commands, web search, and subagents.

## Analogy

It is the model raising its hand to use a device on a lab bench, and the lab tech running it and reading back the gauge.

## Related Concepts

- [[agent-loop|Agent Loop]]
- [[turn|Turn]]
- [[permission|Permission]]
