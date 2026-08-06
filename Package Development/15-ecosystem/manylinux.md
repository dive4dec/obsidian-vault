---
tags: [Package-Ecosystem]
domain: Package Ecosystem
---

# manylinux

> **Domain:** [[_ecosystem-moc|Package Ecosystem]]

## 🎯 Motivation

`manylinux` is a standard for Linux wheels that work across most distributions. Building manylinux wheels lets you publish one binary that installs cleanly on countless Linux systems.

## 📋 Concrete Example

Build your package in a `manylinux2014` Docker container using `auditwheel repair`. The output wheel runs on CentOS 7, Ubuntu 18.04, and Fedora 32 alike — one binary, many distros.

## 🔗 Analogy

A universal phone charger with adapters for US, UK, and EU sockets. You pack one charger and plug in anywhere. manylinux is that universal adapter for Linux package binaries.

## Related Concepts

- [[platform-wheels|Platform Wheels]]
- [[abi-wheels|ABI Wheels]]
- [[musllinux|musllinux]]
