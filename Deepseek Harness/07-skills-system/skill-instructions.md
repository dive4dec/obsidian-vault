---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Instructions

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

The instruction body is the step-by-step content a skill actually provides — the part loaded on demand rather than kept in the catalog. The `dsh-tool-skill` loader returns it in a canonical `<skill_content>` block plus resource guidance, whether the load came from the model's `skill` tool or a user's explicit `/name` invocation. For `dsh-skill-office`, loaded skills append an `Installed LibreOffice Kit` section with the resolved `node` and `cli` paths.

## Concrete Example

Loading `office-docx` from `dsh-skill-office` returns its authoring/editing/structural-check steps plus the bundled `libreofficeKit.cli` path for rendering and PDF conversion.

## Analogy

The full recipe steps, as opposed to the dish's title in the table of contents.

## Related Concepts

- [[skill-load|Load a Skill]]
- [[skill-output|Skill Output]]
- [[skill-office|Office Skill]]
- [[skill-tool|Skill Tool]]
