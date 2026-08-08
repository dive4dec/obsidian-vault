---
tags: [Real-Packages]
domain: Real Packages
---

# hermes-acp-sdk

> **Domain:** [[_real-packages-moc|Real Packages]]

## 🎯 Motivation

`hermes-acp-sdk` is a Python SDK for driving the Hermes Agent from any application using the Agent Client Protocol (ACP). No Jupyter required — use it in scripts, web apps, or CI pipelines to get streaming agent responses.

## 📋 Concrete Example

```python
from hermes_acp_sdk import AgentClient
client = AgentClient(command="hermes acp")
async for event in client.run("Fix the failing tests"):
    print(event)
```

Depends on `agent-client-protocol==0.9.0` and `pyyaml>=6.0`. Optional `[tools]` extra adds MCP tool server support. Optional `[hermes]` extra installs `hermes-agent[acp]>=0.18`.

## 🔗 Analogy

Like a remote control for a robot — the SDK sends commands (your prompt), the robot (Hermes Agent) does the work, and you watch the live video feed (streaming events). No need to be in the same room.

## 📦 Links

- **GitHub:** https://github.com/VoixKz/hermes-acp-sdk
- **PyPI:** https://pypi.org/project/hermes-acp-sdk/
- **Install:** `pip install hermes-acp-sdk` (or `pip install 'hermes-acp-sdk[tools,hermes]'`)

## Related Concepts

- [[agent-client-protocol|Agent Client Protocol (ACP)]]
- [[jupyter-ai-hermes|jupyter-ai-hermes]]
- [[mcp-bridge|MCP Bridge]]
- [[pyproject-toml|pyproject.toml]]
- [[hatch|hatch]]
- [[optional-dependencies|Optional Dependencies]]
