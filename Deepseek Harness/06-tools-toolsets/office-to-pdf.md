---
tags: [DSH-Tools-&-Toolsets]
domain: Tools & Toolsets
---

# Office to PDF

> **Domain:** [[_dsh-tools-toolsets-moc|Tools & Toolsets]]

## Motivation

dsh-office-to-pdf converts Office documents to PDFs on the Host computer: targets with a declared native LibreOffice engine use it, others use the Node WASM engine. The provider accepts DOC, DOCX, XLS, XLSX, PPT, and PPTX; OOXML conversion returns missing-font names. It supports the office skill's document workflows for deliverables.

## Concrete Example

Converting report.docx to PDF via the office skill uses the native LibreOffice engine where available, else libreoffice-kit WASM.

## Analogy

A print shop that turns office documents into PDFs before delivery.

## Related Concepts

- [[present-tool|Present Tool]]
- [[workspace-deps|Workspace Dependencies]]
- [[code-tools|Code Tools]]
