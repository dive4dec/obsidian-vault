---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Tool Error

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

A tool error is the result a failed tool call produces: dsh-tools returns finalized error results without ending the turn, and stable error codes with recovery instructions let the model adjust. Nonzero bash exits are [exit code: N] results for the agent to interpret; a missing web provider returns a structured error the model can act on. The model sees the error as data, not a crash.

## Concrete Example

read of a missing file returns a stable code and recovery hint; web_search with no credential fails with a structured error rather than throwing.

## Analogy

A polite "not available" from the service desk, not the desk catching fire.

## Related Concepts

- [[tool-retry|Tool Retry]]
- [[tool-timeout|Tool Timeout]]
- [[tool-approval|Tool Approval]]
- [[tool|Tool]]
