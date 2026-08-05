---
tags: [LLM-Concepts]
domain: LLM Concepts
---

# RLHF

> **Domain:** [[_llm-concepts-moc|LLM Concepts]]

## 🎯 Motivation

Reinforcement Learning from Human Feedback: humans rank model responses, and a reward model learns what humans prefer, guiding the LLM to produce better answers.

## 📋 Concrete Example

Two responses to 'Explain photosynthesis': humans rate Response A (clear, accurate) above B (confusing, wrong). The model learns to prefer A-style answers. Repeated thousands of times.

## 🔗 Analogy

Training a dog with treats - you can't explain 'good behaviour' to a dog, but you reward good actions and ignore bad ones. Over time, the dog learns what humans prefer. RLHF does this with LLMs.

## Related Concepts

- [[fine-tuning|Fine-Tuning]]
- [[reward-model|Reward Model]]
- [[human-feedback|Human Feedback]]
- [[preference-learning|Preference Learning]]
