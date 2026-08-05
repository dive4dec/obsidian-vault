---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Encoder-Decoder Architecture

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

The original transformer had two parts: an encoder that understands the input, and a decoder that generates the output. Good for translation.

## 📋 Concrete Example

For translation: encoder reads `Hello` in English and creates a rich understanding. Decoder uses that to generate `Bonjour` in French, token by token.

## 🔗 Analogy

A two-person translation team - one person reads and deeply understands the source text (encoder), then briefs the other person who writes the translation (decoder). Each specializes in their role.

## Related Concepts

- [[decoder-only-architecture|Decoder-Only Architecture]]
- [[encoder|Encoder]]
- [[decoder|Decoder]]
- [[transformer-architecture|Transformer Architecture]]
