---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Run Tests

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

Running tests is done through the bash tool: the agent executes the project's test command, reads the [exit code: N] marker, and investigates failures before moving on. Each call is a fresh shell, so the agent passes workdir to run tests where the package lives. With the job registry, a long test suite can run in the background and be collected via job_output.

## Concrete Example

bash command="pnpm test" workdir=/home/jovyan/transfer_AIChat; a nonzero exit means failures to read in the output.

## Analogy

Pressing the build-and-check button and reading the report.

## Related Concepts

- [[bash-tool|Bash Tool]]
- [[build-tool|Build via Bash]]
- [[git-tool|Git via Bash]]
- [[jobs-tool|Jobs Tool]]
