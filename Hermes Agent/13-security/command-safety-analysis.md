---
tags: [Security]
domain: Security
---

# Command Safety Analysis

> **Domain:** [[_security-moc|Security]]

## Motivation

When approvals.mode is smart, an auxiliary LLM analyzes each command for risk level before deciding to auto-approve or prompt.

## Concrete Example

Command: ls -la. Analysis: low risk (read-only). Auto-approved. Command: rm -rf /. Analysis: critical risk. Prompt user. The auxiliary LLM acts as a safety inspector.

## Analogy

A food safety inspector - they check each dish before it leaves the kitchen. Safe dishes go out; suspicious ones are held back. Command safety analysis inspects each command.

## Related Concepts

- [[approval-mode-smart|Approval Mode Smart]]
- [[approvals|Approvals]]
- [[auxiliary-model|Auxiliary Model]]
