---
tags: [Computer-Systems]
domain: Computer Systems
---

# PATH

> **Domain:** [[_computer-systems-moc|Computer Systems]]

## 🎯 Motivation

An environment variable listing directories where the OS looks for executable programs. Determines what commands work in the terminal.

## 📋 Concrete Example

PATH: /usr/bin:/usr/local/bin:/home/user/.local/bin. When you type `python`, the OS searches these directories for `python`. If found, it runs. If not: 'command not found'.

## 🔗 Analogy

PATH is like a list of grocery stores you visit - you look for milk at Store A, then Store B, then Store C. The OS looks for programs in PATH directories, in order.

## Related Concepts

- [[environment-variable|Environment Variable]]
- [[terminal|Terminal]]
- [[executable|Executable]]
