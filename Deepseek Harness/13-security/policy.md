---
tags: [DSH-Security]
domain: Security & Permissions
---

# Policy

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

A policy is the declarative rule that governs what an operation may do. In dsh, policies appear at several seams: the sandbox policy (`dsh-sandbox-policy`) governs file effects per call; the approval policy (`dsh-user-approval`) governs whether sensitive operations pause for consent; and the observation policy (`dsh-fs-observation-policy`) governs whether a file must be read before it is edited. Each policy is a knob with a default, a per-session override, and a resolution precedence. The policy rides the call — it is never fixed on the provider.

## Concrete Example

`dsh-sandbox-policy` configures `mode: workspace-write` and `workspaceRoot: /abs/path`; a session can switch to `read-only` at runtime, and the switch is recorded as a log-only `sandbox/mode` event.

## Analogy

It is the house rulebook: each rule has a default (landlord's), a per-room override (tenant's), and the front desk (resolution) reads the rulebook every time someone knocks.

## Related Concepts

- [[sandbox-policy|Sandbox Policy]]
- [[approval-policy|Approval Policy]]
- [[fs-observation-policy|FS Observation Policy]]
