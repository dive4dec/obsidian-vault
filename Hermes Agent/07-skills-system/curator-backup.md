---
tags: [Skills-System]
domain: Skills System
---

# Curator Backup

> **Domain:** [[_skills-system-moc|Skills System]]

## Motivation

Saving a snapshot of all skills before the curator makes changes, so you can undo if something goes wrong.

## Concrete Example

Before archiving 3 skills, the curator creates a backup: skills-backup-2026-08-04.tar.gz. If the changes were wrong, you can restore from this backup.

## Analogy

Saving a game before a risky mission - if things go wrong, you reload the save. Curator backup saves the skill library state before making changes.

## Related Concepts

- [[curator-rollback|Curator Rollback]]
- [[curator-archive|Curator Archive]]
- [[curator|Curator]]
