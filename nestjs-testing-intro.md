# Introduction to Testing in NestJS

## What are the key differences between unit, integration, and E2E tests?

### Unit tests
Unit tests test small parts of the application in isolation, such as a single service, function, or controller method.

They are usually fast and help identify problems in individual pieces of code.

### Integration tests
Integration tests check whether multiple parts of the application work correctly together.

For example, they may test how a service interacts with a repository, database layer, or another module.

### End-to-end tests
End-to-end tests test the application from the outside, similar to how a real client would use it.

They may send HTTP requests to the NestJS application and verify the full response.

## Why is testing important for a NestJS backend?

Testing helps ensure that backend behaviour remains correct when new features or changes are introduced.

It can catch bugs early, prevent regressions, improve confidence when refactoring, and verify that services, controllers, and modules behave as expected.

## How does NestJS use @nestjs/testing to simplify testing?

NestJS provides the `@nestjs/testing` package, which includes utilities such as `Test.createTestingModule()`.

This allows developers to create a lightweight NestJS testing module and register providers, controllers, and dependencies in a way that is similar to the real application.

It also makes dependency injection easier to use inside tests.

## What are the challenges of writing tests for a NestJS application?

Some challenges include:

- mocking external services;
- mocking database interactions;
- handling asynchronous code;
- configuring dependency injection correctly;
- deciding what should be tested in isolation;
- keeping tests independent and repeatable;
- setting up realistic E2E environments.

## What I implemented

I created a simple `MathService` in NestJS and tested it using Jest and `@nestjs/testing`.

The test creates a NestJS `TestingModule`, retrieves the service using dependency injection, and verifies that:

- the service is created successfully;
- the `add()` method returns the correct result.

This helped me understand how NestJS testing modules work with Jest.
