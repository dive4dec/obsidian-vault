---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Build via Bash

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

Builds run through the bash tool: the agent executes the project's build command, and a long build that outlives its timeout is promoted to a background job with the same id for later collection. Persistent bash suits iterative build sessions where activated environments or exported variables matter across calls. dsh-tool-workspace-dependencies tells the agent where the bundled runtimes live for projects that need them.

## Concrete Example

bash command="pnpm install && pnpm build" run_in_background=true, then job_output job_id=... wait=true to collect the result.

## Analogy

Pressing the factory's start button and watching the progress light.

## Related Concepts

- [[bash-tool|Bash Tool]]
- [[test-tool|Run Tests]]
- [[workspace-deps|Workspace Dependencies]]
- [[long-running-tool|Long-Running Tool]]
