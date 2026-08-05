---
tags: [Prompt-Engineering]
domain: Prompt Engineering
---

# Action-Observation Loop

> **Domain:** [[_prompt-engineering-moc|Prompt Engineering]]

## 🎯 Motivation

In ReAct, the model takes an action, observes the result, then reasons about what to do next. This loop continues until the task is done.

## 📋 Concrete Example

Loop: 1) Think: 'Need stock price.' 2) Act: get_stock(`AAPL`). 3) Observe: '$185.50'. 4) Think: 'Price is up 2%. Now summarize.' 5) Act: respond. The loop drives the agent forward.

## 🔗 Analogy

A scientist running experiments - hypothesize (think), experiment (act), observe results (observe), hypothesize again. The action-observation loop is the scientific method applied to AI agents.

## Related Concepts

- [[react-prompting|ReAct Prompting]]
- [[reasoning|Reasoning]]
- [[tool-use|Tool Use]]
- [[feedback-loop|Feedback Loop]]
