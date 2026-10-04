---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Workflow Tool

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

dsh-tool-workflow lets the model run a JavaScript orchestration script that fans work out across many subagents and returns a final JSON value via the agent, pipeline, parallel, and phase hooks. Use it only when the user explicitly requests a workflow or large multi-agent orchestration — for one or two delegations, plain subagent calls are preferable. run_in_background: true returns an owned job id immediately with live output.

## Concrete Example

The model submits meta (name, description), script (plain JavaScript body), and optional args; a foreground success renders as workflow "<name>" completed (<n> agents).

## Analogy

Writing a conductor's score that many musicians (subagents) play in parallel.

## Related Concepts

- [[subagent-tool|Subagent Tool]]
- [[delegation|Delegation]]
- [[long-running-tool|Long-Running Tool]]
- [[jobs-tool|Jobs Tool]]
