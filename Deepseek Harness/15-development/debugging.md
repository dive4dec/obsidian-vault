---
tags: [DSH-Development]
domain: Development & Internals
---

# Debugging

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

Debugging dsh combines several seams: per-operation diagnostics (the plugin manager keeps pnpm diagnostic logs under the profile's `.plugin-manager/logs`), the startup and reload failure table comparing optional and required plugin failures, and OTel channels for structured reporting. The `--dump-config` and `--dump-default-config` flags inspect the composed tree without booting it.

## Concrete Example

After a failed `dsh plugin --profile web add`, read the returned log path and the `.plugin-manager/run.json` record (which names the pnpm run and is removed when the run ends); for configuration, run the CLI with `--dump-config` to see the composed layers.

## Analogy

It is a car with a diagnostics port: the failure table is the code lookup, the logs are the black box.

## Related Concepts

- [[logs|Logs]]
- [[otel|OTel]]
- [[internals-debug|Debug Internals]]
