---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Tool Approval

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

Tool approval is the allow/deny/ask policy dsh-tools enforces before executing a call: permitted tools run, denied tools never run, and ask-gated tools pause for user consent. Sandbox-denied bash commands can be retried once with wider sandbox_permissions, a justification, and user approval. This is what makes approval a first-class gate instead of a convention.

## Concrete Example

A bash call denied by the workspace-write sandbox is reported as a policy denial; retrying with sandbox_permissions=workspace-write asks the user for approval.

## Analogy

A bouncer who checks credentials before each tool enters.

## Related Concepts

- [[tool-permission|Tool Permission]]
- [[tool-call|Tool Call]]
- [[ask-user-tool|Ask User Tool]]
- [[tool-error|Tool Error]]
