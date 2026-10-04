---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Repeat Tool Reminder

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

dsh-repeat-tool-reminder helps a model escape loops where it calls the same tool with identical arguments without making progress: at configured repeat counts it asks the model to inspect the previous result and change approach or finish. The reminder is advisory and never blocks a legitimate repeat; repeats are tracked per agent and cleared by a new user message. The dsh base bundle enables it at 3, 5, and 8 repeats.

## Concrete Example

After the 3rd identical grep call, the model receives a nudge to read the matched file or change the pattern instead.

## Analogy

A mirror held up when the agent starts running in circles.

## Related Concepts

- [[tool-retry|Tool Retry]]
- [[tool-error|Tool Error]]
- [[tool-call|Tool Call]]
