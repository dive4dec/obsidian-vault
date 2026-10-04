---
tags: [DSH-Gateways-&-Platforms]
domain: Gateway & Platforms
---

# Workspace Controller

> **Domain:** [[_dsh-gateways-moc|Gateway & Platforms]]

## Motivation

`dsh-api-workspace-controller` owns the Host `ctx.workspaceController` service and the generated Client `ctx.remote.workspace` namespace. Its Remote methods create, rename, remove, and reorder Workspaces, reorder Sessions within a Workspace, archive and unarchive Sessions from Workspace navigation, and follow the complete Workspace projection. It also owns `ctx.directoryPickerController` and the `ctx.remote.directoryPicker` namespace.

## Concrete Example

Creating or reordering a Workspace in the web sidebar goes through `ctx.remote.workspace`, while directory picking routes through the `directoryPicker` namespace the same package owns.

## Analogy

The building manager who creates offices, moves desks, and files rooms under construction.

## Related Concepts

- [[api-session|Session Controller]]
- [[api-workspace-files|Workspace Files API]]
- [[directory-picker|Directory Picker]]
- [[gateway|API Gateway]]
