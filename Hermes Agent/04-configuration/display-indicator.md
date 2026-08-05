---
tags: [Configuration]
domain: Configuration
---

# Display Indicator

> **Domain:** [[_configuration-moc|Configuration]]

## Motivation

A TUI element showing agent status: thinking, running tool, idle. Configured in display section.

## Concrete Example

display.indicator: spinner. When Hermes is thinking: [thinking...] When running a tool: [running terminal...] When idle: ready. Visual feedback.

## Analogy

A status light on a printer - green (ready), yellow (processing), red (error). The display indicator shows Hermes status.

## Related Concepts

- [[display-config|Display Config]]
- [[config-yaml|Config YAML]]
- [[tui|TUI]]
