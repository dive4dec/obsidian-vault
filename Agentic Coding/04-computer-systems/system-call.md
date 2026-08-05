---
tags: [Computer-Systems]
domain: Computer Systems
---

# System Call

> **Domain:** [[_computer-systems-moc|Computer Systems]]

## 🎯 Motivation

How programs ask the OS to do things: read files, allocate memory, create processes. The program cannot do these directly.

## 📋 Concrete Example

System call: open(`file.txt`) -> OS opens the file and returns a handle. read(handle) -> OS reads data. write(handle, data) -> OS writes data. Programs request, OS executes.

## 🔗 Analogy

A system call is like ordering food at a restaurant - you (program) tell the waiter (OS) what you want, and the waiter brings it from the kitchen (hardware). You cannot go to the kitchen yourself.

## Related Concepts

- [[kernel|Kernel]]
- [[operating-system|Operating System]]
- [[api|API]]
