---
tags: [DSH-Security]
domain: Security & Permissions
---

# Permission Presets

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

`dsh-permission-presets` offers named permission modes that set sandbox mode and approval policy together while each enforcement service keeps its own value. The shipped defaults are `workspace-write` (sandbox + ask) and `danger-full-access` (sandbox + never); an explicitly loaded Auto review integration adds a current-session-only Auto option. Users switch through the `/permission` command; a bare invocation reports the current preset and every available entry. The `custom` label is derived-only and never a selectable target.

## Concrete Example

```yaml
- name: '@deepseek-ai/dsh-permission-presets'
  config:
    presets:
      workspace-write: { sandbox: workspace-write, approval: ask }
      danger-full-access: { sandbox: danger-full-access, approval: never }
    defaultPreset: workspace-write
```

## Analogy

It is a thermostat preset: you pick "Eco" or "Boost" and both the heating and the fan speed change together, but each dial still shows its own value.

## Related Concepts

- [[permission|Permission]]
- [[sandbox-policy|Sandbox Policy]]
- [[approval-policy|Approval Policy]]
- [[user-approval|User Approval]]
