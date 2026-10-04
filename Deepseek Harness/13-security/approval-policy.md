---
tags: [DSH-Security]
domain: Security & Permissions
---

# Approval Policy

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

The approval policy is the knob that decides whether sensitive operations are routed to answerers or rejected outright. `dsh-user-approval` exposes two values: `ask` (the default) delegates to the composed answerers and fails closed when none is available; `never` rejects every request deterministically before any interactive dispatch, the strict headless stance for CI and unattended runs. A session can switch policy at runtime with `setPolicy(agent, policy)`, which queues a "changed by the user" message for the next model step.

## Concrete Example

In a CI run, `policy: never` means every `sandbox_permissions` escalation is rejected automatically and the model is told "do not request sandbox escalation (do not set `sandbox_permissions`)".

## Analogy

It is the "sign here" or "no signature needed" stamp on a form — the form is the same; only the stamp changes what the clerk does.

## Related Concepts

- [[approval|Approval]]
- [[user-approval|User Approval]]
- [[permission-presets|Permission Presets]]
- [[break-glass|Break Glass]]
