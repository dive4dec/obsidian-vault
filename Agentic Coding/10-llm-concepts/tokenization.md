---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Tokenization

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

Before an LLM can process text, it must split it into tokens. The tokenization method affects speed, cost, and how well the model handles different languages.

## 📋 Concrete Example

BPE (Byte-Pair Encoding) is common. It learns frequent subword patterns. `playing` becomes [`play`, `ing`] if those are common subwords in the training data.

## 🔗 Analogy

Breaking a Lego creation into pieces - you don't break every single brick apart. You separate it into chunks (subwords) that are easy to reassemble. Common combinations stay together.

## Related Concepts

- [[token|Token]]
- [[bpe|BPE]]
- [[vocabulary|Vocabulary]]
- [[subword|Subword]]
