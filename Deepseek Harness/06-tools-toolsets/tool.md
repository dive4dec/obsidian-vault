---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Tool

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

A tool is a single callable capability in dsh: a model-facing name, a description, a parameter schema, and an executor. The model can only call tools that are registered in the tool registry and permitted by policy, so each tool is the unit of what an agent may do. A failed tool call becomes an error result for the model to interpret, not a crash.

## Concrete Example

dsh-tool-fs registers the read tool with parameters file_path, offset, and limit; the executor reads the file and returns line-numbered text.

## Analogy

A function the model can call instead of guessing an answer.

## Related Concepts

- [[tools|Tools]]
- [[tool-schema|Tool Schema]]
- [[tool-call|Tool Call]]
- [[tool-result|Tool Result]]
