---
tags: [Prompt-Engineering]
domain: Prompt Engineering
---

# Seed

> **Domain:** [[_prompt-engineering-moc|Prompt Engineering]]

## 🎯 Motivation

Some APIs let you set a random seed for sampling. Same seed + same prompt = same output, even at non-zero temperatures.

## 📋 Concrete Example

seed=42, temperature=0.7: you get a creative response. Run again with seed=42, temperature=0.7: same creative response. Change seed to 43: different creative response.

## 🔗 Analogy

A random encounter in a video game - if you save your game (seed) and replay, the same encounter happens. Change the save file (seed) and a different encounter occurs. The seed controls randomness.

## Related Concepts

- [[reproducibility|Reproducibility]]
- [[temperature|Temperature]]
- [[sampling|Sampling]]
