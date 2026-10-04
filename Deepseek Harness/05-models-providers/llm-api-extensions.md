---
tags: [DSH-Models-Providers]
domain: Models & Providers
---

# DeepSeek API Extensions

> **Domain:** [[_dsh-models-providers-moc|Models & Providers]]

## Motivation

`@deepseek-ai/dsh-deepseek-llm-api-extensions` is the official registry for additive top-level fields on DeepSeek LLM requests. Contributor plugins claim one declaration-merged field, and `dsh-llm-deepseek` prepares the contributions after serializing its base request, sending them outside the model input. Shipped compositions use it for the default-on `dsh_session_log` and `dsh_plugin_packages` fields.

## Concrete Example

`dsh-session-log-deepseek` owns the `dsh_session_log` field and `dsh-plugin-package-inventory-deepseek` owns `dsh_plugin_packages`; both stay outside model input and are accepted only after an HTTP 2xx.

## Analogy

Extra cargo hooks on a truck bed — you bolt on optional loads without rebuilding the truck.

## Related Concepts

- [[llm-extensions|LLM Extensions]]
- [[deepseek-provider|DeepSeek Provider]]
- [[model-logging|Model Logging]]
- [[provider-registry|Provider Registry]]

