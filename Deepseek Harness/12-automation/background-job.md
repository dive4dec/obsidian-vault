---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Background Job

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

A background job is work started with run_in_background: the tool returns a job id immediately, the agent continues its own turn, and settlement arrives as an in-session notice without polling. Bash commands, subagents, and PTY work all register through the same ctx.jobs runtime.

## Concrete Example

Starting a long command with the bash tool's run_in_background yields an id like bash-1; when it settles, the owning agent receives a notice telling it to read the output with job_output.

## Analogy

Firing off a printer job and going back to your desk: the machine notifies you when it is done.

## Related Concepts

- [[job|Job]]
- [[jobs-local|Local Jobs]]
- [[jobs-tool|Jobs Tool]]
- [[long-running|Long-Running]]
