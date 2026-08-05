---
tags: [Tools-&-Function-Calling]
domain: Tools & Function Calling
---

# REST API

> **Domain:** [[_tools-function-calling-moc|Tools & Function Calling]]

## 🎯 Motivation

A common type of web API where tools make HTTP requests (GET, POST, PUT, DELETE) to interact with external services.

## 📋 Concrete Example

GET https://api.weather.com/v1/current?city=HK -> returns JSON with weather data. The agent wraps this as a tool: get_weather(city) makes this GET request internally.

## 🔗 Analogy

A library check-out system - you request a book (GET), borrow it (POST), return it (PUT), cancel membership (DELETE). REST APIs work the same way with web resources.

## Related Concepts

- [[api-integration|API Integration]]
- [[http-method|HTTP Method]]
- [[endpoint|Endpoint]]
