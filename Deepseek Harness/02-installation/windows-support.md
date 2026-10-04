---
tags: [DSH-Installation]
domain: Installation & Setup
---

# Windows Support

> **Domain:** [[_dsh-installation-moc|Installation & Setup]]

## Motivation

On Windows, dsh relies on the low-level `dsh-win32-process` library (one Koffi binding table over `kernel32.dll`/`advapi32.dll`) to power the Windows ACL sandbox and the ordinary subprocess job runner. A PowerShell tool (`dsh-tool-pwsh`) is also available. A developer cares because process isolation on Windows is ACL/Job-Object based rather than Landlock based.

## Concrete Example

`dsh-win32-process` provides `CreateProcessW`, Job Objects, and restricted-token spawn used by the Windows ACL sandbox.

## Analogy

Like a different set of locks and keys for a different kind of door.

## Related Concepts

- [[platforms|Platforms]]
- [[permissions-setup|Permissions Setup]]
- [[linux-x64|Linux x64]]
