---
tags: [Software-Engineering]
domain: Software Engineering
---

# Exception

> **Domain:** [[_software-engineering-moc|Software Engineering]]

## 🎯 Motivation

An error that occurs during execution. In Python: ValueError, TypeError, ZeroDivisionError, etc.

## 📋 Concrete Example

Exception: int(`abc`) -> ValueError: invalid literal for int(). The code stops unless you handle it: try: int(`abc`) except ValueError: print('Please enter a number.'). Handled gracefully.

## 🔗 Analogy

An exception is like a fire alarm - something went wrong, and the program stops unless someone handles it. try/except is the fire drill: you know what to do when the alarm sounds.

## Related Concepts

- [[error-handling|Error Handling]]
- [[bug|Bug]]
- [[try-except|Try-Except]]
