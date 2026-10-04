---
tags: [DSH-Development]
domain: Development & Internals
---

# Plugin Manager

> **Domain:** [[_dsh-development-moc|Development & Internals]]

## Motivation

`@deepseek-ai/dsh-plugin-manager` manages a profile's plugins without hand-editing config: it enables or disables plugin entries, selects bundles in the ordered `dsh.profile.bundles` list, and installs or removes external bundles by forwarding to pnpm in the profile directory. The same operations power the Web sidebar Plugins page and the `plugin_manager` tool; the service and `dsh plugin` share the package operations and the profile write lock.

## Concrete Example

`dsh plugin --profile web add <spec>` installs a bundle and, on failure, restores the snapshotted `package.json` and `pnpm-lock.yaml`; `dsh plugin --profile web version-exemptions allow-version <pkg@ver> --dsh-version <runtime> --accept-risk` grants an exact-version compatibility exemption in the profile's `compatibility.json`.

## Analogy

It is the app store plus package manager combined, with an undo button that restores the manifest it snapshotted.

## Related Concepts

- [[plugin-development|Plugin Development]]
- [[peer-deps|Peer Dependencies]]
- [[hmr|HMR]]
- [[bundle|Bundling]]
