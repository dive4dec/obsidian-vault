---
tags: [Installation-&-Setup]
domain: Installation & Setup
---

# Nix Setup

> **Domain:** [[_installation-setup-moc|Installation & Setup]]

## Motivation

Nix is a special package manager that creates reproducible environments. Hermes has a Nix setup for users who already use Nix or NixOS. It handles dependencies in a declarative way.

## Concrete Example

On NixOS you add Hermes to your configuration.nix, rebuild, and Hermes is ready with all dependencies pinned.

## Analogy

Like a recipe with exact gram measurements. Every time you cook, the result is identical.

## Related Concepts

- [[platform-support|Platform Support]]
- [[venv|Venv]]
- [[dependencies|Dependencies]]
