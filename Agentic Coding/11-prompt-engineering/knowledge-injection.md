---
tags: [Prompt-Engineering]
domain: Prompt Engineering
---

# Knowledge Injection

> **Domain:** [[_prompt-engineering-moc|Prompt Engineering]]

## 🎯 Motivation

Providing specific facts or domain knowledge in the prompt that the model doesn't have from training, ensuring accurate domain-specific answers.

## 📋 Concrete Example

'Context: Our school's grading scale is A(90+), B(80-89), C(70-79), D(60-69), F(<60). Based on this scale, grade these scores: [scores].' The injected knowledge ensures correct grading.

## 🔗 Analogy

Giving a substitute teacher the lesson plan - they don't know the class's progress (missing knowledge), so you inject it via the lesson plan. Knowledge injection gives the LLM the specific facts it needs.

## Related Concepts

- [[rag|RAG]]
- [[context-provision|Context Provision]]
- [[grounding|Grounding]]
- [[prompt-engineering|Prompt Engineering]]
