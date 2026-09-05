# NestJS API Testing Reflection

## How does Supertest help test API endpoints?

Supertest allows HTTP requests to be sent directly to a NestJS application during automated tests.

It can test routes such as GET and POST endpoints without manually running curl or using an external API client.

It also allows assertions to be made on HTTP status codes, response bodies, and headers.

## What is the difference between unit tests and API tests?

Unit tests focus on a small piece of code, such as one service method or controller method, in isolation.

API tests exercise the application through HTTP requests.

They test how routing, controllers, validation, guards, and services work together.

## Why should authentication be mocked in integration tests?

Mocking authentication allows API behaviour to be tested without depending on a real authentication provider.

This makes tests faster and more reliable.

It also avoids requiring real access tokens or external Auth0 requests during automated testing.

## How can API tests cover both success and failure cases?

API tests should include:

- valid requests that return successful responses;
- invalid request bodies;
- missing required fields;
- authentication failures;
- invalid IDs or resources;
- expected HTTP status codes.

Testing both success and failure cases gives better confidence that the API behaves correctly.

## What I implemented

I created integration tests using Jest and Supertest.

The tests include:

- a GET API test;
- a POST API test;
- request validation setup;
- mocked service dependencies;
- mocked authentication for a protected endpoint.

This allowed the API behaviour to be tested without using a real database or real Auth0 authentication.
