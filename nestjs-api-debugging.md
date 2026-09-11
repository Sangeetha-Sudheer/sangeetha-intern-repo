# NestJS API Debugging Reflection

## How can logging request payloads help with debugging?

Logging request payloads helps confirm what data is actually reaching the backend.

It can reveal missing fields, incorrect values, malformed input, or differences between what the client intended to send and what the server actually received.

This is especially useful when debugging validation errors or unexpected application behaviour.

## What tools can you use to inspect API requests and responses?

Tools such as Bruno, Postman, and cURL can be used to send API requests and inspect responses.

These tools allow developers to view:

- request methods;
- URLs;
- headers;
- request bodies;
- response bodies;
- HTTP status codes;
- response headers.

I used Bruno to manually inspect NestJS API requests and responses.

## How would you debug an issue where an API returns the wrong status code?

I would first reproduce the problem using Bruno or cURL.

Then I would inspect:

- the request method;
- request body;
- request headers;
- route configuration;
- controller logic;
- validation;
- thrown exceptions;
- middleware and interceptors.

I would compare the actual response status with the expected status and trace the code path that produced the response.

## What are some security concerns when logging request data?

Request logs may contain sensitive information such as:

- passwords;
- authentication tokens;
- cookies;
- API keys;
- personal information;
- confidential request payloads.

Sensitive data should not be logged unnecessarily.

Logs should avoid exposing secrets and should be stored securely with appropriate access controls.

## What I implemented

I used Bruno to inspect NestJS API requests and responses.

I created a request inspection endpoint and logged incoming request headers in the NestJS controller.

I sent a request containing a custom header and verified that the server received it.

I inspected the API response body and HTTP status code in Bruno.

I also reviewed how middleware and interceptors can be used to observe request and response behaviour during debugging.
