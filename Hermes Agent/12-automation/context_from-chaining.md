---
tags: [Automation-&-Scheduling]
domain: Automation & Scheduling
---

# context_from (Chaining)

> **Domain:** [[_automation-scheduling-moc|Automation & Scheduling]]

## Motivation

context_from lets one cron job receive the output of a previous job, chaining them together.

## Concrete Example

Job A fetches the news. Job B uses context_from A to summarize the news that Job A collected.

## Analogy

Like a relay race: each runner passes the baton to the next so they build on the same effort.

## Related Concepts

- [[cron-jobs|cron jobs]]
- [[hermes-cron-create|hermes cron create]]
- [[cron-job-skills|Cron Job Skills]]
