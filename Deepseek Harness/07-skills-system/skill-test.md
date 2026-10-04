---
tags: [DSH-Skills]
domain: Skills System
---

# Test a Skill

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Testing a skill confirms it is discovered, loads cleanly, and produces the expected instructions or resources. In dsh you verify discovery (the skill appears in the catalog from `dsh-skill-filesystem`), then load it by name through the `skill` tool to confirm the body and resource guidance arrive. `dsh-skill-office`'s shared Python checker is an example of a skill providing its own structural validation.

## Concrete Example

After adding a skill under a scanned root, confirm it shows in the session catalog, then call the `skill` tool with its name and check the `<skill_content>` block returns the expected body.

## Analogy

Dry-running a recipe once to make sure every step works before serving guests.

## Related Concepts

- [[skill-load|Load a Skill]]
- [[skill-debug|Debug a Skill]]
- [[skill-errors|Skill Errors]]
- [[skill-best-practices|Skill Best Practices]]
