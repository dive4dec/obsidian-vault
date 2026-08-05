---
tags: [Prompt-Engineering]
domain: Prompt Engineering
---

# Fallback Prompt

> **Domain:** [[_prompt-engineering-moc|Prompt Engineering]]

## 🎯 Motivation

If the main prompt fails or the model can't answer, a fallback prompt provides a safe alternative response.

## 📋 Concrete Example

Main: 'Answer the question from the document.' If model says 'I don't know': Fallback: 'I apologize, I couldn't find the answer. Here are some related resources: [links].' The fallback prevents dead ends.

## 🔗 Analogy

A backup plan for a picnic - if it rains (main plan fails), you have an indoor backup (fallback). Fallback prompts ensure the user always gets something useful, even when the main prompt fails.

## Related Concepts

- [[prompt-engineering|Prompt Engineering]]
- [[error-handling|Error Handling]]
- [[robustness|Robustness]]
