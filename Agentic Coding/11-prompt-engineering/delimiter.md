---
tags: [Prompt-Engineering]
domain: Prompt Engineering
---

# Delimiter

> **Domain:** [[_prompt-engineering-moc|Prompt Engineering]]

## 🎯 Motivation

Using clear separators (###, ---, <text>) in prompts helps the model distinguish between instructions, examples, and input data.

## 📋 Concrete Example

Prompt: 'Summarize the text between <article> and </article>.\n<article>\n[long text]\n</article>' The delimiters clearly mark where the text to summarize begins and ends.

## 🔗 Analogy

Using quotation marks in writing - the quotes tell the reader 'this is a quote, not my words'. Delimiters tell the model 'this is data, not instructions'. Clear boundaries prevent confusion.

## Related Concepts

- [[prompt-engineering|Prompt Engineering]]
- [[instruction-design|Instruction Design]]
- [[prompt-structure|Prompt Structure]]
