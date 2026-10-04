---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Tool Result

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

The tool result is the output fed back to the model after a tool runs; defineTool declares a canonical output and a render function that shapes it for the model. Nonzero bash exits are reported as [exit code: N] results for the agent to interpret, not tool errors. Results are capped so one tool cannot flood the context.

## Concrete Example

A read call returns line-numbered content with a pagination footer; job_output always ends with a [status: ...] marker.

## Analogy

The answer that comes back over the phone line to the caller.

## Related Concepts

- [[tool-call|Tool Call]]
- [[tools|Tools]]
- [[tool-output|Tool Output]]
- [[large-output|Large Output]]
