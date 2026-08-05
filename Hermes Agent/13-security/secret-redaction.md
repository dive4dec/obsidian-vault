---
tags: [Security]
domain: Security
---

# Secret Redaction

> **Domain:** [[_security-moc|Security]]

## Motivation

Tool output (terminal stdout, read_file, web content) is scanned for strings that look like API keys, tokens, and secrets before entering the conversation.

## Concrete Example

Terminal runs: echo $OPENAI_API_KEY. Output: sk-abc123.... Redaction replaces it: [REDACTED]. The model never sees the actual key. Protects against accidental exposure.

## Analogy

A censor who blacks out sensitive parts of a document before it is published. The information exists but cannot be read. Secret redaction blacks out API keys in tool output.

## Related Concepts

- [[security-overview|Security Overview]]
- [[pii-redaction|PII Redaction]]
- [[secrets-management|Secrets Management]]
