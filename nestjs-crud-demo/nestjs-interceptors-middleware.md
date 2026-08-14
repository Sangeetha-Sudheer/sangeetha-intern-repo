# 7.3 Using Interceptors & Middleware in NestJS

## Difference Between Middleware and Interceptors

Middleware runs before the request reaches the route handler. It is useful for tasks such as logging, authentication checks, request preprocessing, and adding information to the request.

Interceptors work around the route handler. They can run logic before and after the route executes. This makes them useful for logging execution time, transforming responses, caching, and other cross-cutting concerns.

## When I Would Use an Interceptor Instead of Middleware

I would use an interceptor when I need access to both the request and the response lifecycle.

For example, in this task I used a logging interceptor to log when the request entered the application and when the response completed. This allowed me to measure how long the request took.

Middleware was used for simpler request-level logging before the controller handled the request.

## What I Implemented

I created:

- `src/common/interceptors/logging.interceptor.ts`
- `src/common/middleware/request-logger.middleware.ts`

I registered the middleware through `AppModule` and registered the interceptor globally in `main.ts`.

I then started the NestJS application and sent a GET request to:

`http://localhost:3000/users`

The terminal showed:

- `Middleware request: GET /users`
- `Interceptor request: GET /users`
- `Interceptor response: GET /users - 1ms`

This confirmed that both the middleware and interceptor were working correctly.

## How LoggerErrorInterceptor Helps

A LoggerErrorInterceptor can help by catching or observing errors that occur while requests are being processed and logging useful information about them.

This can make debugging easier because developers can see where an error occurred and what request caused it.

It also keeps logging logic separate from controllers and services, which helps keep the application code cleaner.

## Evidence

I successfully built and ran the NestJS application with zero compilation errors.

I also tested the `/users` route and confirmed that both the middleware and interceptor executed successfully.

A terminal screenshot was captured showing the application startup and middleware/interceptor log output.
