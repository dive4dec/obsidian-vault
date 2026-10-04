---
tags: [DSH-MCP-&-Integrations]
domain: MCP & Integrations
---

# Office Integration

> **Domain:** [[_dsh-mcp-moc|MCP & Integrations]]

## Motivation

Office integration converts Office documents (DOC, DOCX, XLS, XLSX, PPT, PPTX) into PDFs so an agent can produce readable deliverables. dsh mounts this as the `office-to-pdf` provider, backed by the independently published LibreOffice kit, with a native LibreOffice engine where available and Node WASM elsewhere. Callers submit a source identity, extension, and priority through `ctx.officeToPdf.convert()`.

## Concrete Example

The Web bundle mounts `dsh-office-to-pdf` as `office-to-pdf`, so `ctx.officeToPdf.convert()` returns caller-owned PDF bytes plus a list of missing fonts.

## Analogy

It is a print shop the agent sends raw documents to, receiving back a finished PDF.

## Related Concepts

- [[office-to-pdf|Office to PDF]]
- [[libreoffice|LibreOffice Kit]]
- [[integration|Integration]]
