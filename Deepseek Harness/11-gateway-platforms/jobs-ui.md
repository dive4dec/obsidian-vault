---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Jobs UI

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-client-ui-jobs` shows the session's background jobs in one header control, with lifecycle, elapsed time, progress, and terminal detail. Live jobs and settled jobs with retained output offer expandable output panels — collapsing stops the stream. Live rows lead with a ticking duration, followed by kind and status, while settled rows fold under a section heading.

## Concrete Example

A running job row ticks its elapsed time in the header; expanding it streams retained output until you collapse it.

## Analogy

The kitchen's ticket rail: you can watch each order's status and pull the slip to read the notes.

## Related Concepts

- [[api-job|Job Controller]]
- [[chat-ui|Chat UI]]
- [[layout|Layout]]
- [[api-session|Session Controller]]
