---
tags: [Real-Packages]
domain: Real Packages
---

# Dependency Graph Overview

> **Domain:** [[_real-packages-moc|Real Packages]]

## 🎯 Motivation

Visualizing how the 9 real packages depend on each other and on external libraries reveals the architecture of the entire Jupyter+Hermes ecosystem. Students can see which packages are leaf nodes (few deps) and which are integration hubs (many deps).

## 📋 Concrete Example

```
jupyterhub-litellm → jupyterhub, tornado, aiohttp
jupyter-ai-hermes → jupyter-ai-acp-client, jupyter-ai-persona-manager, mcp>=1.27
jupyter-ai-hermes-magics → ipython>=8.0, nbformat>=5.0
jupyter-hermes-proxy → jupyter-server-proxy>=4.0
hermes-acp-sdk → agent-client-protocol==0.9.0, pyyaml
cppmanlite → (no runtime deps)
jupyter-cpp-tutor → ipython>=8.0
jupyter-python-tutor → ipython>=8.0
jupyterlab-pwa → jupyter-server>=2.0, jupyterlab>=4.0
```

## 🔗 Analogy

Like a food web in biology — each organism (package) eats (depends on) certain others. Producers (cppmanlite, no deps) are at the bottom, apex predators (jupyter-ai-hermes, many deps) are at the top. Understanding the web tells you what happens if one species goes extinct.

## Related Concepts

- [[dependency-tree|Dependency Tree]]
- [[transitive-dependencies|Transitive Dependencies]]
- [[dependency-resolution|Dependency Resolution]]
- [[optional-dependencies|Optional Dependencies]]
- [[pure-python|Pure Python]]
- [[pyproject-toml|pyproject.toml]]
