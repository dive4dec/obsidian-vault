---
tags: [Models-&-Providers]
domain: Models & Providers
---

# OAuth

> **Domain:** [[_models-providers-moc|Models & Providers]]

## Motivation

Open Authorization. A protocol for logging in without sharing passwords. Used by Nous Portal, Qwen, GitHub Copilot.

## Concrete Example

hermes auth add qwen --oauth. Browser opens. You log in to Qwen. Token is saved. No API key needed. OAuth is more secure than API keys.

## Analogy

A guest WiFi pass - you log in once and get access. No need for a password. OAuth logs you in once and grants access.

## Related Concepts

- [[nous-portal|Nous Portal]]
- [[auth-json|Auth JSON]]
- [[qwen-oauth|Qwen OAuth]]
