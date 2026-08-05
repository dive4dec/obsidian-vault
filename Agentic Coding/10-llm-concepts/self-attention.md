---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Self-Attention

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

To understand a word in context, a model needs to know which other words are relevant. Self-attention lets each word look at all other words and decide what matters.

## 📋 Concrete Example

In 'I went to the bank to deposit money', self-attention helps the model focus on `deposit` and `money` to understand `bank` means a financial institution, not a river bank.

## 🔗 Analogy

Reading a detective novel - when you see 'the suspect', you mentally look back at all characters introduced so far to figure out who 'the suspect' is. That mental looking-back is attention.

## Related Concepts

- [[multi-head-attention|Multi-Head Attention]]
- [[transformer-architecture|Transformer Architecture]]
- [[context-window|Context Window]]
