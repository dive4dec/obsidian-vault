---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Long-Running Tool

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

A long-running tool is one that outlives a single turn's patience: a build, a test suite, a workflow over many subagents. dsh bounds these with timeouts that promote to background jobs (promoteOnTimeout) and reports progress through job output and completion notices. dsh-tool-call-timeout-policy applies the cooperative limits, and the tool never hangs the loop.

## Concrete Example

A foreground command reaching its timeout is kept running as its background job instead of being killed, with the same id returned.

## Analogy

An oven: you set the timer, check the light, and collect when done.

## Related Concepts

- [[tool-timeout|Tool Timeout]]
- [[background-tool|Background Tool]]
- [[jobs-tool|Jobs Tool]]
- [[workflow-tool|Workflow Tool]]
