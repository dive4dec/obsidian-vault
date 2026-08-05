---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# Token

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

Computers don't understand text directly. Text is broken into tokens - chunks that might be words, parts of words, or even single characters.

## 📋 Concrete Example

'Hello world!' might be tokenized as [`Hello`, ' world', '!'] - 3 tokens. `Unhappiness` might be [`Un`, `happiness`] - 2 tokens. LLMs process tokens, not words.

## 🔗 Analogy

Slicing a baguette for sandwiches - you don't use the whole loaf. You cut it into pieces (tokens). Some pieces are bigger (whole words), some smaller (word parts), but each is a manageable bite.

## Related Concepts

- [[tokenization|Tokenization]]
- [[vocabulary|Vocabulary]]
- [[subword-tokenization|Subword Tokenization]]
