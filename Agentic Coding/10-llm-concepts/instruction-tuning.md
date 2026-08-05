---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Instruction Tuning

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

Fine-tuning specifically on instruction-following data - 'translate this', 'summarize this', 'write code for this' - teaches the model to follow directions.

## 📋 Concrete Example

Dataset: [('Translate to French: Hello', `Bonjour`), ('Summarize: [long text]', '[short summary]')]. The model learns to follow different instruction types.

## 🔗 Analogy

A new employee going through orientation - they learn specific procedures: 'when the phone rings, do this', 'when a customer arrives, do that'. Instruction tuning trains the model on specific tasks.

## Related Concepts

- [[fine-tuning|Fine-Tuning]]
- [[supervised-fine-tuning|Supervised Fine-Tuning]]
- [[instruction-data|Instruction Data]]
