---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Positional Encoding

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

Transformers process all tokens simultaneously, so they don't know word order. Positional encoding adds position information to each token.

## 📋 Concrete Example

In 'dog bites man' vs 'man bites dog', the words are the same but order changes meaning. Positional encoding tags each word with its position: 'dog(pos=1)', 'bites(pos=2)', 'man(pos=3)'.

## 🔗 Analogy

Seat numbers at a concert - without seat numbers, you know who is in the audience but not where they're sitting. Positional encoding gives each token a 'seat number' so the model knows the order.

## Related Concepts

- [[transformer-architecture|Transformer Architecture]]
- [[self-attention|Self-Attention]]
- [[token|Token]]
