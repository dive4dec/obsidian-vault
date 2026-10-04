---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Background Tool

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

Running a tool in the background is the run_in_background surface of dsh: bash and pwsh commands, subagents, and workflows can return a job id at once instead of blocking the turn. With a job registry composed, every such command is a job from its start, and dsh-tool-jobs collects output and cancels it. Configs like enableRunInBackground gate the surface per tool.

## Concrete Example

bash command="pnpm build" run_in_background=true returns a job id; job_output job_id=... reads it later.

## Analogy

Hitting Ctrl-Z: keep the work going, come back when you want it.

## Related Concepts

- [[jobs-tool|Jobs Tool]]
- [[long-running-tool|Long-Running Tool]]
- [[bash-tool|Bash Tool]]
- [[workflow-tool|Workflow Tool]]
