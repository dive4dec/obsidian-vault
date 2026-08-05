---
tags: [Tools-&-Function-Calling]
domain: Tools & Function Calling
---

# Schema

> **Domain:** [[_tools-function-calling-moc|Tools & Function Calling]]

## 🎯 Motivation

A formal description of what parameters a function accepts - their names, types, and whether they are required. This structure lets the model fill in arguments correctly.

## 📋 Concrete Example

Schema for get_weather: {`city`: {`type`: `string`, `description`: 'City name', `required`: True}, `unit`: {`type`: `string`, `enum`: [`C`,`F`], `default`: `C`}}.

## 🔗 Analogy

A form template - Name (required, text), Age (required, number), Email (optional, text). The schema tells the model what fields to fill and what type each value should be.

## Related Concepts

- [[tool-definition|Tool Definition]]
- [[type-hint|Type Hint]]
- [[validation|Validation]]
