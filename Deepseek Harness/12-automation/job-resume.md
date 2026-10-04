---
tags: [DSH-Automation]
domain: Automation & Scheduling
---

# Resume a Job

> **Domain:** [[_dsh-automation-moc|Automation & Scheduling]]

## Motivation

Jobs themselves are not resumable: a settled job's record stays listed until removed, and work that must continue is started again as a new job. What does resume is the conversation around the work — headless adopts a persisted session with --session-id, and a goal stays armed only after an explicit resume.

## Concrete Example

A crashed long task is re-run with a fresh job id (or a second headless run with --session-id <id>); a disarmed active goal resumes via /goal resume or the goal strip's resume action.

## Analogy

You cannot pause a finished movie; you start a new one that picks the story back up.

## Related Concepts

- [[job|Job]]
- [[headless|Headless]]
- [[goal|Goal]]
- [[goal-tool|Goal Tool]]
