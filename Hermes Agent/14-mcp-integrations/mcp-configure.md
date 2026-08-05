---
tags: [MCP-&-Integrations]
domain: MCP & Integrations
---

# MCP Configure

> **Domain:** [[_mcp-integrations-moc|MCP & Integrations]]

## Motivation

Toggling which tools from an MCP server are enabled. Command: hermes mcp configure NAME.

## Concrete Example

hermes mcp configure github. Interactive menu: [x] create_issue, [x] merge_pr, [ ] list_repos. You can disable tools you do not need. Only enabled tools are sent to the model.

## Analogy

Customizing your app notifications - you choose which apps can send notifications. hermes mcp configure lets you choose which MCP tools are active.

## Related Concepts

- [[mcp-server|MCP Server]]
- [[mcp-tool|MCP Tool]]
- [[tool-enable|Tool Enable]]
