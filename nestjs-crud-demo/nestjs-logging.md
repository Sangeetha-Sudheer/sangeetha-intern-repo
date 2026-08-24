# 8.3 Logging & Error Handling in NestJS

## What are the benefits of using nestjs-pino for logging?

`nestjs-pino` provides structured logging for NestJS applications using Pino.

Structured logs are easier to search, filter, and analyse than plain text logs because information such as request method, URL, response status, and response time can be stored consistently.

It is also useful because Pino is designed to be fast and suitable for backend applications.

In this task, I configured `nestjs-pino` to log HTTP requests and responses from the NestJS application.

## How does global exception handling improve API consistency?

Global exception handling ensures that errors are returned using a consistent response structure across the application.

Instead of every controller formatting errors differently, a global exception filter can centralise the behaviour.

In my implementation, errors are returned with:

- HTTP status code
- timestamp
- request path
- HTTP method
- error message

This makes API errors easier for both developers and clients to understand.

## What is the difference between a logging interceptor and an exception filter?

A logging interceptor is used around the request/response lifecycle and can record information such as request details, execution time, and response information.

An exception filter is specifically responsible for catching exceptions and deciding how the error response should be returned to the client.

Interceptors are useful for cross-cutting behaviour around successful and unsuccessful requests, while exception filters focus on error handling.

## How can logs be structured to provide useful debugging information?

Useful structured logs should include contextual information such as:

- timestamp
- log level
- HTTP method
- request URL
- status code
- response time
- error message
- request or correlation ID where appropriate

This information helps developers identify what happened, when it happened, and which request caused the problem.

## Evidence

I verified this task by:

- installing and configuring `nestjs-pino`
- successfully building and starting the NestJS application
- sending normal API requests
- confirming structured request logs were produced
- creating a global custom exception filter
- triggering a 404 error
- confirming the API returned a consistent formatted JSON error response
