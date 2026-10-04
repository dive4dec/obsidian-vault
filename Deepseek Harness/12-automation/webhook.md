---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Webhook

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

dsh-webhook provides the Host ctx.webhookRuntime: a registry for trusted external-event rules plus one built-in action, creating an ordinary root Session inside a Web Workspace. The interface is register(rule) and dispatch(delivery); provider authentication belongs to adapter packages.

## Concrete Example

A rule returns a WebhookSessionRequest with workspacePath, title, prompt, agentPreset, and permissionPreset; the commit point is the Agent's followup(), and a crash loses calls that have not admitted a prompt because the runtime is fire-and-forget.

## Analogy

A doorbell wired to your office: a trusted visitor rings, and a fresh session walks in to answer.

## Related Concepts

- [[webhook-github|GitHub Webhook]]
- [[event|Event]]
- [[trigger|Trigger]]
- [[unattended|Unattended]]
