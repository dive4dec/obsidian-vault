---
tags: [Tools-&-Function-Calling]
domain: Tools & Function Calling
---

# Tool Selection

> **Domain:** [[_tools-function-calling-moc|Tools & Function Calling]]

## 🎯 Motivation

The model must choose the right tool from many available options. Good tool descriptions are critical for correct selection.

## 📋 Concrete Example

Available: search_web, calculator, read_file, send_email. User asks: 'What is 15% of 240?' Model selects calculator (not search_web) because it is a math question.

## 🔗 Analogy

Choosing the right tool from a toolbox - to hammer a nail, you pick the hammer (not the saw). To cut wood, you pick the saw. Tool selection is the model picking the right tool for each task.

## Related Concepts

- [[tool-definition|Tool Definition]]
- [[function-calling|Function Calling]]
- [[decision-making|Decision Making]]
