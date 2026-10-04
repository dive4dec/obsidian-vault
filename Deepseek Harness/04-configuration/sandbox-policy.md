---
tags: [DSH-Configuration]
domain: Configuration
---

# Sandbox Policy

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-sandbox-policy` applies one file-effect policy to every confined bash, filesystem, and terminal call. A deployment chooses a default `mode` (the fail-safe default is `read-only`; a workspace-writable agent opts into `workspace-write` explicitly) and a fallback `workspaceRoot` (default `process.cwd()`). Each session can switch modes independently at runtime; the switch is recorded as a log-only `sandbox/mode` event, survives restart through replay, and feeds the model a `sandbox:policy` context snapshot before each request.

## Concrete Example

Load it with `config: { mode: workspace-write, workspaceRoot: /abs/path }`; then `resolve({ session, mode })` returns explicit grant, else session event, else deployment default.

## Analogy

It is one policy home that keeps every shell and file tool in the same sandbox mode.

## Related Concepts

- [[permission-presets|Permission Presets]]
- [[approval-policy|Approval Policy]]
- [[fs-observation-policy|FS Observation Policy]]
