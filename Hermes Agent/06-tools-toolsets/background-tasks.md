---
tags: [Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Background Tasks

> **Domain:** [[_tools-toolsets-moc|Tools & Toolsets]]

## Motivation

Long-running tasks started with terminal(background=true). Tracked by the process tool. Can be polled, waited on, or killed.

## Concrete Example

terminal(command=python train.py, background=true). Task runs in background. process(action=poll). Check progress. process(action=wait). Block until done.

## Analogy

Running a download in the background - you continue working while it downloads. Background tasks let Hermes work while long tasks run.

## Related Concepts

- [[process-tool|Process Tool]]
- [[toolsets|Toolsets]]
- [[terminal-backend|Terminal Backend]]
