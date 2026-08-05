---
tags: [CLI-&-Commands]
domain: CLI & Commands
---

# Hermes Webhook

> **Domain:** [[_cli-commands-moc|CLI & Commands]]

## Motivation

The hermes webhook command group manages webhook subscriptions. Subcommands include subscribe, list, remove, and test. Webhooks let external services trigger Hermes tasks.

## Concrete Example

You run hermes webhook subscribe github-issues. Now GitHub can POST to your Hermes when an issue is opened, and Hermes runs a task.

## Analogy

Like setting up a doorbell that also texts you when someone rings it.

## Related Concepts

- [[webhooks|Webhooks]]
- [[cron-jobs|Cron Jobs]]
- [[gateway|Gateway]]
