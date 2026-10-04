---
tags: [DSH-Security]
domain: Security & Permissions
---

# Permission

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

A permission is the gate that authorizes an operation (file write, sandbox escalation, sensitive tool call) before it runs. In dsh, permissions compose from two knobs: the sandbox mode from `dsh-sandbox-policy` and the approval policy from `dsh-user-approval`. The `dsh-permission-presets` package bundles those two knobs into named presets that users switch through the `/permission` command. Each knob still owns its own value, so removing the preset service leaves the last selection in effect.

## Concrete Example

A `workspace-write` preset bundles `sandbox: workspace-write` with `approval: ask`; selecting it via `/permission workspace-write` writes both knob events in one step.

## Analogy

It is a two-key lock: the sandbox key opens the door, the approval key lets a stranger use the door — the preset is the key ring.

## Related Concepts

- [[permission-presets|Permission Presets]]
- [[sandbox-policy|Sandbox Policy]]
- [[approval-policy|Approval Policy]]
- [[gate|Gate]]
