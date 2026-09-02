#77
# Unit Testing Reflection

## Mocking API Calls in Jest

### Why is it important to mock API calls in tests?

Mocking API calls allows tests to run without depending on real external APIs or network connections. This makes tests faster, more reliable, and repeatable.

It also allows different situations, such as successful responses and API failures, to be tested in a controlled way.

### What are some common pitfalls when testing asynchronous code?

Common problems include:

- Forgetting to wait for asynchronous updates.
- Making assertions before the API response has been processed.
- Depending on real network requests.
- Not resetting mocks between tests.
- Testing only successful responses.
- Leaving unresolved promises.
- Using incorrect mock response structures.

For this task, I used `jest.fn()` to mock `fetch` and `waitFor()` to wait for React state updates.

The tests verified both a successful API response and a failed API response.
##76
## Introduction to Unit Testing with Jest

### Why is automated testing important in software development?

Automated testing helps verify that code continues to work correctly when changes are made.

Unit tests can catch bugs early, reduce regressions, and make it safer to refactor or add new features.

Automated tests are also repeatable and can be run quickly during development or as part of a CI/CD pipeline.

### What did I find challenging when writing my first Jest test?

One challenge was understanding how the test file connects to the function being tested and how Jest assertions such as `expect()` and `toBe()` work.

I also needed to understand the structure of Jest tests using `describe()` and `it()`.

After running the tests and seeing them pass, the basic testing workflow became clearer.

### What I implemented

I created a simple `add` utility function that takes two numbers and returns their sum.

I wrote Jest tests to verify:

- two positive numbers are added correctly;
- negative numbers are handled correctly.

The tests passed successfully.
