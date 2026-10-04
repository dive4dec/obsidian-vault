---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Approval

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

Approval is the user-approval flow when an operation requires consent. `dsh-user-approval` is a channel-neutral one-shot approval seam: the `ask` policy sends each request to the deployment's human or machine answerers, `never` rejects it without prompting, and missing or failed answerers return `unavailable` so the action fails closed. An approval applies only to that one request, and every request and outcome is recorded in the requesting session's audit log.

## Concrete Example

Under a lower sandbox mode, the `plugin_manager` tool's `ask` requests approval; `never`, rejection, or an unavailable approval channel prevents execution.

## Analogy

It is a signature line on a form: the task waits until someone with authority signs for that one item.

## Related Concepts

- [[permission|Permission]]
- [[sandbox|Sandbox]]
- [[tool-calling|Tool Calling]]
