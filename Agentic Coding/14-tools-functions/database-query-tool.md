---
tags: [Tools-&-Function-Calling]
domain: Tools & Function Calling
---

# Database Query Tool

> **Domain:** [[_tools-function-calling-moc|Tools & Function Calling]]

## 🎯 Motivation

A tool that lets the agent query databases (SQL, NoSQL) to retrieve, insert, or update data.

## 📋 Concrete Example

Agent calls: query_database(sql='SELECT name, grade FROM students WHERE grade > 80') -> returns: [(`Alice`, 95), (`Bob`, 85)]. It can answer data questions precisely.

## 🔗 Analogy

A librarian searching the catalog - you ask 'Do you have books about space?' They search the database and tell you what is available. Database query tools let agents search digital data catalogs.

## Related Concepts

- [[tool-use|Tool Use]]
- [[sql|SQL]]
- [[crud|CRUD]]
