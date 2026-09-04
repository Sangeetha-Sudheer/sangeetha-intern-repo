# NestJS Unit Tests Reflection

## Why is it important to test services separately from controllers?

Services and controllers have different responsibilities.

Services usually contain business logic, while controllers handle incoming requests and return responses.

Testing them separately makes it easier to identify where a problem occurs and ensures that each part works correctly in isolation.

## How does mocking dependencies improve unit testing?

Mocking lets a test replace a real dependency with a controlled fake version.

For example, a controller test can mock a service instead of calling the real service.

This makes tests faster, more predictable, and independent from databases, APIs, or other external systems.

It also allows different behaviours and edge cases to be tested easily.

## What are common pitfalls when writing unit tests in NestJS?

Common pitfalls include:

- testing too many components together;
- depending on real databases or external APIs;
- not resetting mocks between tests;
- only testing successful scenarios;
- making tests depend on execution order;
- creating overly complex tests;
- not verifying whether mocked dependencies were called correctly.

## How can you ensure that unit tests cover all edge cases?

I can identify expected inputs, invalid inputs, empty values, boundary cases, and error conditions.

I should test both normal behaviour and failure scenarios.

Mocks can also be configured to return different values or throw errors so that different code paths are tested.

## What I implemented

I created a simple `GreetingService` and `GreetingController`.

The service was tested independently.

The controller was tested with a mocked `GreetingService` using `jest.fn()`.

The tests verify:

- the service returns the expected greeting;
- the service handles an empty name;
- the controller returns data from the mocked service;
- the controller calls the service correctly.
