---
tags: [Skills-System]
domain: Skills System
---

# Skill Validation

> **Domain:** [[_skills-system-moc|Skills System]]

## Motivation

Checking that a newly created or modified skill is valid: frontmatter is correct, referenced files exist, scripts are executable.

## Concrete Example

After editing SKILL.md, you run validation. It checks: frontmatter has name and description - OK. references/api.md exists - OK. scripts/deploy.sh is executable - FIXED (chmod +x).

## Analogy

Proofreading an essay before submitting - you check spelling, grammar, and that all references are cited. Skill validation checks a skill is ready for use.

## Related Concepts

- [[skills-check|Skills Check]]
- [[skillmd|SKILL.md]]
- [[skill-frontmatter|Skill Frontmatter]]
