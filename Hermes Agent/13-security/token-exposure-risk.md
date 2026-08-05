---
tags: [Security]
domain: Security
---

# Token Exposure Risk

> **Domain:** [[_security-moc|Security]]

## Motivation

The risk that API keys or tokens might leak through tool output, logs, or error messages. Secret redaction mitigates this.

## Concrete Example

Without redaction: terminal error message might include API key in a URL: https://api.example.com?key=sk-xxx. With redaction: key is replaced with [REDACTED]. Risk mitigated.

## Analogy

A letter with personal information - if you mail it in a transparent envelope, anyone can read it. Token exposure risk is using transparent envelopes. Redaction uses opaque envelopes.

## Related Concepts

- [[secret-redaction|Secret Redaction]]
- [[secrets-management|Secrets Management]]
- [[security-overview|Security Overview]]
