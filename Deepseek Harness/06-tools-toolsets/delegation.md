---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Delegation

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

Delegation is offloading work to a child agent so it does not consume the parent's context: dsh-tool-subagent handles one-shot or continuable delegation, and dsh-tool-workflow scales it to many subagents via a script. The child returns its result, not intermediate steps, and the parent continues with useful work while the child runs. Prefer plain subagent calls for one or two delegations and workflows only for explicit large orchestration.

## Concrete Example

subagent description="Read README" prompt="..." runs in the background by default and returns a subagent id you can continue with send_message.

## Analogy

Telling an assistant to run an errand and reporting back only the result.

## Related Concepts

- [[subagent-tool|Subagent Tool]]
- [[workflow-tool|Workflow Tool]]
- [[subagent-control|Subagent Control]]
