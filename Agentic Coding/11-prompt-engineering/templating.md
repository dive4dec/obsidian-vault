---
tags: [Prompt-Engineering]
domain: Prompt Engineering
---

# Templating

> **Domain:** [[_prompt-engineering-moc|Prompt Engineering]]

## 🎯 Motivation

Using a template engine (Jinja, f-strings) to dynamically construct prompts from variables, conditionals, and loops.

## 📋 Concrete Example

Jinja: 'Hello {{name}}, your score is {{score}}.{% if score > 80 %} Great job!{% endif %}' - variables and conditionals create dynamic prompts. Same template, different outputs for different users.

## 🔗 Analogy

Mail merge in a word processor - one letter template, but each copy has a different name and address. Templating does this for prompts: one template, many customized versions.

## Related Concepts

- [[prompt-template|Prompt Template]]
- [[variable|Variable]]
- [[dynamic-prompting|Dynamic Prompting]]
