---
tags: [Programming-Fundamentals]
domain: Programming Fundamentals
---

# File I-O

> **Domain:** [[_programming-fundamentals-moc|Programming Fundamentals]]

## 🎯 Motivation

Programs need to save and load data - reading a config file, saving game progress, writing a log.

## 📋 Concrete Example

`with open('scores.txt', 'w') as f: f.write('Alice: 100')`. Reading: `with open('scores.txt') as f: data = f.read()`.

## 🔗 Analogy

A notebook - you write down information (write to file) so you don't forget it. Later, you open the notebook and read it back (read from file).

## Related Concepts

- [[file-handle|File Handle]]
- [[context-manager|Context Manager]]
- [[serialization|Serialization]]
