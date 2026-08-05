---
tags: [Software-Engineering]
domain: Software Engineering
---

# Try-Except

> **Domain:** [[_software-engineering-moc|Software Engineering]]

## 🎯 Motivation

Python's error handling: try something, except catch the error. Prevents crashes.

## 📋 Concrete Example

try: file = open(`data.txt`) except FileNotFoundError: print('File not found. Creating a new one.') file = open(`data.txt`, `w`). The error is caught and handled. No crash.

## 🔗 Analogy

try-except is like wearing a seatbelt - you try to drive safely, but if something goes wrong (exception), the seatbelt (except) protects you. The program survives the error.

## Related Concepts

- [[exception|Exception]]
- [[error-handling|Error Handling]]
- [[python|Python]]
