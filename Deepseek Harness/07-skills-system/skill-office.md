---
tags: [DSH-Skills]
domain: Skills System
---

# Office Skill

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

`dsh-skill-office` bundles Word, PowerPoint, and Excel workflows into the skills `office-docx`, `office-pptx`, and `office-xlsx`. The provider supplies instructions and scripts that use a bundled Python environment by default and can render pages, convert to PDF, and recalculate workbooks via the LibreOffice Kit CLI when supplied. The deployment itself provides the interpreters, authoring libraries, execution tools, and file delivery tool.

## Concrete Example

Mounting `@deepseek-ai/dsh-skill-office` beside the skill registry and `dsh-tool-skill` exposes `office-docx`, `office-pptx`, and `office-xlsx`; a shared Python checker validates DOCX/PPTX/XLSX structure without modifying the source.

## Analogy

A preloaded office manual that tells the agent how to author and check spreadsheet, slide, and document files.

## Related Concepts

- [[skill-registry|Skill Registry]]
- [[skill-tool|Skill Tool]]
- [[skill-instructions|Skill Instructions]]
- [[skill-deps|Skill Dependencies]]
