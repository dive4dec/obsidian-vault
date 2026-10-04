---
tags: [DSH-Skills]
domain: Skills System
---

# Search Skills

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Searching skills finds one by keyword from the available set. In the Web client, `dsh-client-ui-skill` ranks candidates through the shared `rankByName` ranker: the query matches a case-insensitive ordered subsequence of the skill name, prefix hits rank first, and ties keep host order. A failed `skills/list` call folds into a silent menu-group drop.

## Concrete Example

Typing `of` in the composer's `/` menu ranks `office-docx`, `office-pptx`, and `office-xlsx` by `rankByName` subsequence match.

## Analogy

Typing a few letters and getting the matching recipe cards in order of relevance.

## Related Concepts

- [[skill-catalog|Skill Catalog]]
- [[skill-list|List Skills]]
- [[skill-ui|Skill UI]]
- [[skill-discovery|Skill Discovery]]
