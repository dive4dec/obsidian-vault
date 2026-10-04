---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# Office to PDF

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

`dsh-office-to-pdf` converts Office documents to PDFs on the Host computer. Targets with a declared native LibreOffice engine use it; other targets fall back to Node WASM. The provider accepts DOC, DOCX, XLS, XLSX, PPT, and PPTX, and reports missing-font names for OOXML conversion. Callers invoke `ctx.officeToPdf.convert()` with a source identity, extension, and scheduling priority.

## Concrete Example

The Web bundle mounts it as `office-to-pdf`, and a result contains caller-owned PDF bytes, a missing-font list, a cache key, and a conversion generation that changes on configuration replacement.

## Analogy

It is a finisher that takes in a document and hands back a sealed, printable PDF.

## Related Concepts

- [[office|Office Integration]]
- [[libreoffice|LibreOffice Kit]]
- [[integration|Integration]]
