---
tags: [DSH-Configuration]
domain: Configuration
---

# Approval Policy

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

The approval policy is the knob that governs when an operation needs user consent; `dsh-user-approval` owns its execution, and the value is set through `setApprovalPolicy`. Permission presets bundle one approval policy with one sandbox mode, and the policy contributes separately to the model's runtime-context snapshot alongside the sandbox policy. A preset that pins the `never` policy is what delegated children run under.

## Concrete Example

Set `approval: ask` in a preset so sensitive operations prompt the user, or `approval: never` for unattended runs.

## Analogy

It is the consent dial: `ask` prompts, `never` does not.

## Related Concepts

- [[permission-presets|Permission Presets]]
- [[sandbox-policy|Sandbox Policy]]
- [[fs-observation-policy|FS Observation Policy]]
