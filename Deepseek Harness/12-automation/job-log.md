---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Job Log

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

A job's log is the retained, observer-side view of its output: chunks with channel log reach observers but never the model, and readAt reads retained chunks at absolute byte offsets without consuming anything. The browser's job.follow stream anchors on such a read and closes when the ring drains.

## Concrete Example

job.follow({ sessionId?, jobId, from? }) opens with an opened anchor carrying the job projection, then coalesced output frames from the given offset, then one terminal status — all non-consuming, so the model's cursor is untouched.

## Analogy

The CCTV footage of the work: anyone can replay it without moving the worker's clipboard.

## Related Concepts

- [[job-output|Job Output]]
- [[job|Job]]
- [[job-controller|Job Controller]]
- [[job-status|Job Status]]
