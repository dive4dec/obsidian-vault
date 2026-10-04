---
tags: [DSH-Security]
domain: Security & Permissions
---

# Sandbox Policy

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

`dsh-sandbox-policy` owns the per-call file-effect policy that every confining capability resolves. The deployment default (`read-only` by fail-safe) is set in the plugin config; a session can switch modes at runtime and the switch is recorded as a log-only `sandbox/mode` event that survives restart through replay. Resolution precedence is: approved explicit mode > session's last `sandbox/mode` event > deployment default. Before each model request, the effective policy is contributed to the runtime-context snapshot.

## Concrete Example

```yaml
- name: '@deepseek-ai/dsh-sandbox-policy'
  config:
    mode: workspace-write
    workspaceRoot: /absolute/path/to/workspace
```
A typo in `mode` is rejected at plugin load, so the fail-safe default stays in force until the fix is deployed.

## Analogy

It is the house rule: the landlord sets the standing policy, each tenant can override it in their own room, and the rule is re-read every time someone knocks on a door.

## Related Concepts

- [[sandbox|Sandbox]]
- [[read-only|Read-Only]]
- [[workspace-write|Workspace-Write]]
- [[approval-policy|Approval Policy]]
