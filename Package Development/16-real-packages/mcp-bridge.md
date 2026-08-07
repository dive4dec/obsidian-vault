---
tags: [Real-Packages]
domain: Real Packages
---

# MCP Bridge

> **Domain:** [[_real-packages-moc|Real Packages]]

## 🎯 Motivation

The MCP Bridge in `jupyter-ai-hermes` connects Jupyter notebook context (cells, variables, kernel state) to Hermes Agent via the Model Context Protocol. This lets Hermes see what is in the notebook and act on it — run cells, analyze output, suggest fixes.

## 📋 Concrete Example

`jupyter-ai-hermes` depends on `mcp>=1.27`. The MCP bridge exposes notebook cells as MCP resources and kernel operations as MCP tools. When a student asks Hermes to fix an error, Hermes reads the failing cell via MCP and runs a corrected version.

## 🔗 Analogy

Like a translator between two experts who speak different languages — the notebook expert (Jupyter) and the AI expert (Hermes) cannot talk directly, so the MCP bridge translates notebook state into something Hermes understands.

## Related Concepts

- [[jupyter-ai-hermes|jupyter-ai-hermes]]
- [[hermes-acp-sdk|hermes-acp-sdk]]
- [[agent-client-protocol|Agent Client Protocol (ACP)]]
- [[jupyter-ai-hermes-magics|jupyter-ai-hermes-magics]]
