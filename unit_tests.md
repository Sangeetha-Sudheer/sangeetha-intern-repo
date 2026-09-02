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
