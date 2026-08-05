---
tags: [Prompt-Engineering]
domain: Prompt Engineering
---

# Overprompting

> **Domain:** [[_prompt-engineering-moc|Prompt Engineering]]

## 🎯 Motivation

Adding too many constraints, examples, and instructions can actually make the model worse - it gets confused by conflicting or excessive demands.

## 📋 Concrete Example

Bad: 50 examples, 20 constraints, 5 roles, 3 format requirements, 10 negative prompts. The model can't satisfy everything and may produce worse output than a simpler prompt.

## 🔗 Analogy

Overcoaching an athlete - if you give 20 instructions at once ('keep your elbow up, bend your knees, watch the ball, breathe, rotate, follow through...'), they freeze. Too many instructions paralyze. Same with LLMs.

## Related Concepts

- [[prompt-engineering|Prompt Engineering]]
- [[constraint-prompting|Constraint Prompting]]
- [[clarity|Clarity]]
