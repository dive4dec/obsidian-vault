---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Tool Timeout

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

dsh-tool-call-timeout-policy gives tool calls configured cooperative time limits and returns a clear timeout error to the model after cancellation settles; calls that finish in time are unchanged. Each tool supplies its own limit; the package has no configuration and is enabled in the dsh base bundle. A tool that ignores or slowly handles cancellation can still keep the caller waiting because the package cannot hard-stop downstream work.

## Concrete Example

A bash call that outlives its timeout is promoted to a background job instead of being silently killed when promoteOnTimeout is true.

## Analogy

A kitchen timer that rings loudly instead of letting the meal burn.

## Related Concepts

- [[bash-tool|Bash Tool]]
- [[tool-error|Tool Error]]
- [[long-running-tool|Long-Running Tool]]
