---
tags: [DSH-Security]
domain: Security & Permissions
---

# Anonymous User ID

> **Domain:** [[_dsh-security-moc|Security & Permissions]]

## Motivation

`dsh-anonymous-user-id` provides one random UUID per harness home to correlate telemetry, feedback, and DeepSeek provider requests from the same installation without identifying the user. The value is stored in `$DSH_HOME/.anonymous-user-id`, persists across restarts, and is regenerated after you delete the file. It is sent as the `x-deepseek-harness-user-id` header on provider requests, as the `user.id` resource attribute in session telemetry, and in feedback acknowledgements. It is anonymous and home-scoped; no machine or account data ever goes into the value.

## Concrete Example

Every DeepSeek request carries `x-deepseek-harness-user-id: <uuid>`; deleting `$DSH_HOME/.anonymous-user-id` mints a fresh UUID at the next launch, so the running process keeps its current id until it exits.

## Analogy

It is the sticker on a library book: the sticker shows the library, not the reader, and a new library gets a different sticker.

## Related Concepts

- [[data-protection|Data Protection]]
- [[secret|Secret]]
- [[authorization|Authorization]]
