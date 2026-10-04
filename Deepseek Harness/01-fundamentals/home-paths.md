---
tags: [DSH-Fundamentals]
domain: DSH Fundamentals
---

# Home Paths

> **Domain:** [[_dsh-fundamentals-moc|DSH Fundamentals]]

## Motivation

`@deepseek-ai/dsh-home-paths` lets package authors resolve one DeepSeek Harness data root and derive child paths from it. `resolveDshHome()` reads the explicit override, then `$DSH_HOME`, then the default `~/.dsh`; `dshHomePath('settings')` joins one child onto the resolved home, and `dshCachePath('models')` derives `$DSH_HOME/cache/models`. It also renders the root symbolically (`~/.dsh` or `$DSH_HOME`) so display never leaks an absolute machine path.

## Concrete Example

```ts
import { resolveDshHome, dshHomePath } from '@deepseek-ai/dsh-home-paths'
const home = resolveDshHome() // configured path, else $DSH_HOME, else ~/.dsh
```

## Analogy

It is a single `getcwd` for user data: one canonical root that everything else hangs off.

## Related Concepts

- [[dsh-home|DSH Home]]
- [[dsh-command|The dsh Command]]
