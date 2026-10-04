---
tags: [DSH-Configuration]
domain: Configuration
---

# Permission Presets

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-permission-presets` offers named permission modes that set sandbox and approval together while each enforcement service keeps its own value. Each preset bundles one sandbox mode with one approval policy; the reserved names `custom` and `auto` cannot appear in the table. Configured presets supply future-session defaults via the `permission` settings namespace, and users switch the current session with the `/permission` command. Unmatched knob combinations appear as `custom`, which users can leave but cannot select.

## Concrete Example

A preset table maps `workspace-write` → `{ sandbox: workspace-write, approval: ask }` and `danger-full-access` → `{ sandbox: danger-full-access, approval: never }`, with `defaultPreset: workspace-write`.

## Analogy

It is a dropdown of pre-cooked permission combos instead of two separate dials.

## Related Concepts

- [[sandbox-policy|Sandbox Policy]]
- [[approval-policy|Approval Policy]]
- [[settings|Settings]]
