---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# LibreOffice Kit

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

`libreoffice-kit` is the independently published engine that converts, recalculates, and renders local Office documents. It ships prebuilt LibreOffice engines — a native engine on macOS/Windows and the shared WASM engine on Linux — and exposes the same API across server, desktop, or document-processing jobs. `dsh-office-to-pdf` builds on this kit to power the host Office conversion.

## Concrete Example

`npm install @deepseek-ai/libreoffice-kit` then `createConverter()` gives a converter with configurable fonts, cancellation, and resource limits; binary `.doc`, `.xls`, `.ppt` inputs must be OLE compound documents.

## Analogy

It is the printing press under the print shop — the thing that actually makes the pages.

## Related Concepts

- [[office-to-pdf|Office to PDF]]
- [[office|Office Integration]]
- [[integration|Integration]]
