---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Best Practices

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

Good skills are discoverable, specific, and self-contained. Provide a clear `description` and a `whenToUse` hint so the model can decide to load the skill, keep the body to the actual steps, and respect the invocation-policy keys so a skill appears on the right surfaces. The model is told never to infer instructions from the catalog summary alone, so the body must stand on its own.

## Concrete Example

Write `office-docx` with a crisp `description`, a `whenToUse` for Word tasks, and a body that names the bundled `libreofficeKit.cli` steps rather than assuming the reader's context.

## Analogy

A recipe card with a clear title, a one-line "use when," and steps that need no other card.

## Related Concepts

- [[skill-authoring|Skill Authoring]]
- [[skill-metadata|Skill Metadata]]
- [[skill-trigger|Skill Trigger]]
- [[skill-templates|Skill Templates]]
