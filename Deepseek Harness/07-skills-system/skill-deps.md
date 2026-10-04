---
tags: [DSH-Skills]
domain: Skills System
---

# Skill Dependencies

> **Domain:** [[_dsh-skills-moc|Skills System]]

## Motivation

A skill may depend on external interpreters, libraries, or tools to actually do its work. `dsh-skill-office` is the clearest case: the provider supplies instructions and scripts, but the deployment must supply its interpreters, authoring libraries, execution tools, and file delivery tool, plus a standalone Node executable and the LibreOffice Kit CLI. Activation checks that the configured paths are real files.

## Concrete Example

`dsh-skill-office` requires `node` (a standalone Node) and `cli` (the kit's `lib/cli.js`); a missing or relative path, or a skill file without a frontmatter description, rejects activation.

## Analogy

A recipe that only works if you actually own the oven and the pans.

## Related Concepts

- [[skill-office|Office Skill]]
- [[skill-permission|Skill Permission]]
- [[skill-security|Skill Security]]
- [[skill-package|Skill Package]]
