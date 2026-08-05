---
tags: [NLP-Fundamentals]
domain: NLP Fundamentals
---

# Vocabulary

> **Domain:** [[_nlp-fundamentals-moc|NLP Fundamentals]]

## 🎯 Motivation

The set of all tokens a model knows. Each token maps to an ID number. Unknown tokens cause problems.

## 📋 Concrete Example

A vocabulary of 50000 subwords covers most English. A word outside it gets split into known subwords.

## 🔗 Analogy

Like a dictionary the model has memorized - if a word is not in it, the model has to describe it with smaller known pieces.

## Related Concepts

- [[tokenization|Tokenization]]
- [[bpe|BPE]]
- [[embedding|Embedding]]
