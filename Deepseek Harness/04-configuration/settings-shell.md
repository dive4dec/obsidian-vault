---
tags: [DSH-Configuration]
domain: Configuration
---

# Shell Settings

> **Domain:** [[_dsh-configuration-moc|Configuration]]

## Motivation

`dsh-client-ui-settings-shell` lets you set how long one command may run and how much of each output stream stays in memory. Open Plugins in the sidebar, select **Shell** in the Official group; the page stages what you type and writes only on save, marks the values you overrode, and offers to reset each back to the deployment's default. The page exists while the Host serves the `shell` namespace, so a deployment without a local shell executor shows no trace of it.

## Concrete Example

Raise the shell command timeout on the Plugins → Shell page; the override is marked and can be reset to the deployment default.

## Analogy

It is the timeout and output-memory dial for the agent's shell tool.

## Related Concepts

- [[terminal-config|Terminal Config]]
- [[shell-env|Shell Environment]]
- [[settings|Settings]]
