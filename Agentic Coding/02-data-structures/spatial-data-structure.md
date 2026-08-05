---
tags: [Data-Structures]
domain: Data Structures
---

# Spatial Data Structure

> **Domain:** [[_data-structures-moc|Data Structures]]

## 🎯 Motivation

When data has location (coordinates on a map, 3D objects in a game), spatial structures organise it by position for fast geographic queries.

## 📋 Concrete Example

A quadtree divides a 2D map into four quadrants, recursively. 'Find all restaurants within 1 km' becomes checking only the relevant quadrants.

## 🔗 Analogy

A city divided into districts, each divided into blocks, each into buildings. Finding a restaurant nearby means checking only your district, not the entire city.

## Related Concepts

- [[quadtree|Quadtree]]
- [[octree|Octree]]
- [[r-tree|R-Tree]]
- [[nearest-neighbour-search|Nearest Neighbour Search]]
