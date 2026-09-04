# NestJS Mocking Reflection

## Why is mocking important in unit tests?

Mocking allows a unit test to isolate the code being tested from external dependencies.

For example, a controller can be tested without calling a real service, and a service can be tested without connecting to a real database.

This makes tests faster, more predictable, and easier to repeat.

## How do you mock a NestJS provider?

NestJS providers can be mocked in a testing module using `useValue`.

For example, a real service can be replaced with an object containing Jest mock functions.

This allows the controller to behave as though the service exists without executing the real implementation.

## What are the benefits of mocking the database instead of using a real one?

Mocking the database:

- avoids creating test data in a real database;
- makes tests faster;
- prevents tests from depending on database availability;
- makes results more predictable;
- allows specific success and failure scenarios to be simulated.

Using a mocked TypeORM repository also allows repository methods such as `find()`, `findOneBy()`, and `save()` to be controlled inside the test.

## What is the difference between jest.fn() and jest.spyOn()?

`jest.fn()` creates a completely new mock function.

It is useful when creating a fake dependency such as a mocked service or repository.

`jest.spyOn()` watches an existing method on an object.

It can also temporarily replace that method's implementation while still allowing Jest to check whether the method was called.

## How do I decide what to mock vs. what to test directly?

I should test the behaviour of the unit itself directly.

Dependencies that are outside the responsibility of that unit should usually be mocked.

For example:

- in a controller test, I test the controller and mock the service;
- in a service test, I test the service and mock the repository;
- external APIs, databases, and other services should normally be mocked in unit tests.

This keeps each test focused on one unit of behaviour.

## What I implemented

I created:

- a controller test with a mocked `UsersService`;
- a service test with a mocked TypeORM repository;
- examples using `jest.fn()`;
- an example using `jest.spyOn()`.

The tests demonstrate how NestJS dependencies can be replaced during testing so the code can be tested in isolation.
