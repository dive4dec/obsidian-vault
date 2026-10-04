---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Tool Call

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

A tool call is the model's request to invoke a registered tool with concrete arguments. The agent loop dispatches the call through ctx.tools, validating arguments against the tool schema first. The model chooses when to call a tool and with what arguments based on the tool's description and schema.

## Concrete Example

The model emits a bash call with command "ls -la" and workdir; dsh executes it and feeds the result back.

## Analogy

The model picking up the phone to ask an outside system a question.

## Related Concepts

- [[tool|Tool]]
- [[tool-schema|Tool Schema]]
- [[tool-result|Tool Result]]
- [[tool-approval|Tool Approval]]
