---
tags: [Tools-&-Function-Calling]
domain: Tools & Function Calling
---

# Backward Compatibility

> **Domain:** [[_tools-function-calling-moc|Tools & Function Calling]]

## 🎯 Motivation

When a tool is updated, old agent code should still work. Backward compatibility ensures updates do not break existing behavior.

## 📋 Concrete Example

Tool v2 adds an optional `detailed` parameter: get_weather(city, detailed=False). Old calls without `detailed` still work. New calls can use it. Backward compatible.

## 🔗 Analogy

A new phone keeping old chargers - the new phone has new features but still works with your old charger (backward compatible). If it needed a new charger, that would break compatibility.

## Related Concepts

- [[tool-versioning|Tool Versioning]]
- [[api-design|API Design]]
- [[migration|Migration]]
