---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Git via Bash

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

Git is used through the bash tool rather than a dedicated tool: the agent runs git status, git diff, git log, etc., reads the output, and interprets nonzero exits as problems to investigate. Fresh-shell semantics mean each git call is self-contained, and the managed DSH_* environment is available. This keeps version control under the same timeout, background-job, and sandbox rules as everything else.

## Concrete Example

bash command="git status" shows the working tree; git commands needing history use git log with output bounded like any other tool result.

## Analogy

Operating the version-control switchboard from the same shell as everything else.

## Related Concepts

- [[bash-tool|Bash Tool]]
- [[code-tools|Code Tools]]
- [[build-tool|Build via Bash]]
