---
tags: [DSH-Security]
domain: Security & Permissions
---

# Credentials

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

`dsh-credentials` keeps secret values out of configuration by letting settings and `cordis.yml` refer to key names such as `DEEPSEEK_API_KEY`. It also stores durable per-plugin credential records addressed by `<scope>/<id>`, including authorization grants and provider environment values. A rotated stored key applies to the next request without a restart or configuration edit. `describe` reports whether a key or record is set, its source, and whether it is writable — never the value.

## Concrete Example

```yaml
apiKeyEnv: DEEPSEEK_API_KEY
```
The LLM adapter resolves the key per request; rotating it through the settings UI takes effect on the very next call.

## Analogy

It is a key ring on the door: the label says which key fits which lock, but the key itself stays in the ring — you never hand out the key to read.

## Related Concepts

- [[credentials-local|Local Credentials]]
- [[authorization|Authorization]]
- [[secret|Secret]]
- [[api-key-security|API Key Security]]
