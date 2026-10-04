---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Permission

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

A permission is a gate that authorizes an operation — a file write, network fetch, or shell command — before it runs. `dsh-tools` enforces an allow/deny/ask policy per tool, and `dsh-permission-presets` bundles a sandbox mode with an approval policy into named, selectable presets that set both together while each enforcement service keeps its own value. Unmatched knob combinations appear as `custom`, which users can leave but cannot select. Developers care because the preset is the single control that decides how much the agent may do unattended.

## Concrete Example

`dsh-permission-presets` supplies the Permissions selector; a preset sets `dsh-sandbox-policy` mode and the approval policy at once.

## Analogy

It is a security badge that says which floors you may enter without an escort.

## Related Concepts

- [[sandbox|Sandbox]]
- [[approval|Approval]]
- [[tool-calling|Tool Calling]]
