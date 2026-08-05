---
tags: [Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Browser Snapshot

> **Domain:** [[_tools-toolsets-moc|Tools & Toolsets]]

## Motivation

A tool that captures the current page accessibility tree. Returns interactive elements with ref IDs for clicking.

## Concrete Example

browser_snapshot(). Returns: button [ref=@e5] Submit, textbox [ref=@e3] Search. Each element has a ref for clicking.

## Analogy

A map of a room - it shows where everything is. Browser snapshot maps the page so Hermes knows what to click.

## Related Concepts

- [[browser-tool|Browser Tool]]
- [[web-toolset|Web Toolset]]
- [[browser-click|Browser Click]]
