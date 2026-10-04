---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Output

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Skill output is what a skill produces for the agent after it loads. Loading through `dsh-tool-skill` yields the full instruction body plus resource guidance in a canonical `<skill_content>` block, retained as ordinary tool history. Skills can also point at packaged resources — `dsh-skill-badge` ships a PNG, and `dsh-skill-office` ships scripts and an `Installed LibreOffice Kit` section.

## Concrete Example

Loading `office-xlsx` returns its body plus the resolved `libreofficeKit.node` and `libreofficeKit.cli` absolute paths the agent uses to render or convert.

## Analogy

The finished recipe you get after following the card's steps.

## Related Concepts

- [[skill-instructions|Skill Instructions]]
- [[skill-tool|Skill Tool]]
- [[skill-office|Office Skill]]
- [[skill-load|Load a Skill]]
