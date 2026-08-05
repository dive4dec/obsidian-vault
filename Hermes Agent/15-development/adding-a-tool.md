---
tags: [Development-&-Contributing]
domain: Development & Contributing
---

# Adding a Tool

> **Domain:** [[_development-contributing-moc|Development & Contributing]]

## Motivation

Creating a new Hermes tool requires 3 steps: 1) Create tools/your_tool.py. 2) Register in the tool registry. 3) Add to toolsets.py.

## Concrete Example

1) tools/weather.py: def weather_tool(city): return get_weather(city). 2) registry.register(name=weather, schema=..., handler=...). 3) Add to _HERMES_CORE_TOOLS. Done.

## Analogy

Adding a new item to a restaurant menu - write the recipe (tool file), add it to the menu (registry), and train the staff (toolsets). Three steps and the new dish (tool) is ready.

## Related Concepts

- [[tool-registry|Tool Registry]]
- [[toolsets|Toolsets]]
- [[project-layout|Project Layout]]
