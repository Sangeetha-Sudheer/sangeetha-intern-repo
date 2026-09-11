# NestJS VS Code Debugging Reflection

## How do breakpoints help in debugging compared to console logs?

Breakpoints pause program execution at a specific line so I can inspect the current state of the application.

Compared with console logs, breakpoints allow me to inspect variable values, follow the call stack, and step through code line by line without adding temporary logging statements.

## What is the purpose of launch.json, and how does it configure debugging?

`launch.json` defines how VS Code starts the application in debug mode.

For this NestJS project, it was configured to run the NestJS debug script, use the Node debugger, enable source maps, and display output in the integrated terminal.

This allows the TypeScript source code to be debugged directly.

## How can you inspect request parameters and responses while debugging?

I placed a breakpoint in the Users controller and triggered the endpoint:

`GET /users/2`

While paused in the controller, I inspected the route parameter and confirmed that `id = 2`.

I then continued execution into the Users service and inspected the returned `user` object.

This helped me see how data moves from the controller to the service before the API response is returned.

## How can you debug background jobs that don't run in a typical request-response cycle?

For background jobs, breakpoints can be placed directly inside the worker or job processor method.

The application can then be started in debug mode and the background job can be triggered normally.

When the job begins processing, VS Code pauses at the breakpoint so the job data, variables, and execution flow can be inspected.

This is useful for debugging asynchronous jobs such as BullMQ tasks.

## What I implemented

I configured VS Code debugging for my NestJS project using `.vscode/launch.json`.

I placed breakpoints in both the Users controller and Users service.

I triggered a request using Bruno and VS Code paused at the controller breakpoint.

I inspected the request parameter and confirmed that `id = 2`.

I then continued into the service and inspected the returned user object while execution was paused.

This helped me understand how VS Code breakpoints can be used to inspect application state and follow request flow through a NestJS backend.
