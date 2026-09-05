# NestJS Test Coverage Reflection

## What does the coverage bar track, and why is it important?

The coverage bar shows how much of the codebase is exercised by automated tests.

Common coverage metrics include:

- statement coverage;
- branch coverage;
- function coverage;
- line coverage.

Coverage is useful because it helps identify parts of the codebase that are not adequately tested.

## Why does Focus Bear enforce a minimum test coverage threshold?

A minimum coverage threshold helps reduce the risk of untested code being deployed.

It encourages developers to add tests when new features or changes are introduced and gives the team more confidence that existing behaviour will continue to work.

## How can high test coverage still lead to untested functionality?

High coverage does not automatically mean the tests are effective.

A test may execute a line of code without checking whether the result is correct.

Important edge cases, error conditions, and alternative branches can also remain untested even when overall coverage is high.

## What are examples of weak vs. strong test assertions?

A weak assertion may only check that an object exists:

`expect(result).toBeDefined();`

A stronger assertion verifies the actual expected behaviour:

`expect(result).toEqual(expectedUser);`

Another strong assertion verifies that a dependency was called correctly:

`expect(repository.findOneBy).toHaveBeenCalledWith({ id: 1 });`

Strong assertions help confirm the behaviour of the code instead of only executing it.

## How can I balance increasing coverage with writing effective tests?

I should use coverage reports to identify untested areas, but I should not write tests only to increase the percentage.

Each test should verify real behaviour, including successful cases, failure cases, edge cases, and interactions with dependencies.

## What I improved

My initial overall coverage was approximately:

- Statements: 77.16%
- Branches: 63.63%
- Functions: 69.69%
- Lines: 74.10%

The `users.service.ts` file had especially low coverage.

I added meaningful tests for:

- retrieving all users;
- retrieving a user by ID;
- handling a missing user;
- creating a user;
- updating an existing user;
- handling an update for a missing user;
- removing an existing user;
- handling removal of a missing user.

After adding these tests, the overall coverage improved to:

- Statements: 84.25%
- Branches: 67.27%
- Functions: 78.78%
- Lines: 82.14%

The coverage for `users.service.ts` improved to:

- Statements: 100%
- Branches: 83.33%
- Functions: 100%
- Lines: 100%

All 28 tests across 12 test suites passed successfully.

This showed me that coverage reports are useful for identifying weak areas, but meaningful assertions are just as important as the percentage itself.
