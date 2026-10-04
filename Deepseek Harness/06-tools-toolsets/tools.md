---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Tools

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

dsh-tools is the tool registry and execution pipeline for DeepSeek Harness: it exposes typed capabilities to the model, validates calls, enforces allow/deny/ask policy, and returns finalized results without ending a turn on ordinary tool failures. Mounting it provides ctx.tools, the registry every tool plugin registers into and the agent loop dispatches through. Registering a tool is enough to make it visible — the registry feeds its schemas into system-prompt assembly automatically.

## Concrete Example

Tool authors use defineTool from @deepseek-ai/dsh-tools to declare a name like read_file, typed parameters, and an execute body; the dsh base bundle wires it into the agent.

## Analogy

The reception desk of an office — every capability checks in here, gets vetted, and only then meets the model.

## Related Concepts

- [[tool|Tool]]
- [[tool-schema|Tool Schema]]
- [[tool-registry|Tool Registry]]
- [[toolsets|Toolsets]]
