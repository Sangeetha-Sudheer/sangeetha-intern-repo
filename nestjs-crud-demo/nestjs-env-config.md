# 8.2 Handling Environment Variables & Configuration in NestJS

## How does @nestjs/config help manage environment variables?

`@nestjs/config` provides a structured way to load and access environment variables in a NestJS application.

The `ConfigModule` loads values from a `.env` file and makes them available throughout the application. By setting `isGlobal: true`, the configuration can be accessed across modules.

`ConfigService` is used to retrieve values such as the application port, PostgreSQL settings, and Redis settings.

## Why should secrets never be stored in source code?

Secrets such as API keys, database passwords, tokens, and credentials should not be hard-coded because source code is usually stored in version control.

If a secret is committed to Git, it may remain in repository history even if it is removed later.

Using environment variables keeps sensitive configuration separate from source code.

The `.env` file should therefore be ignored using `.gitignore`.

## How can you validate environment variables before the app starts?

NestJS can validate configuration using the `validationSchema` option in `ConfigModule.forRoot()`.

In this task, I used Joi validation for required values such as:

- `DB_HOST`
- `DB_USERNAME`
- `DB_NAME`
- `REDIS_HOST`

When the `.env` file was temporarily unavailable, the application failed during startup and reported the missing required variables.

This helps detect configuration problems before the application runs.

## How can you separate configuration for different environments?

Different environments can use separate environment files or deployment-level environment variables.

Examples include:

- `.env.development`
- `.env.test`
- `.env.production`

The `NODE_ENV` variable can also be used to determine which environment configuration should be loaded.

This allows development, testing, and production to use different databases, Redis servers, ports, and credentials without changing application source code.

## Evidence

I verified this task by:

- configuring `@nestjs/config`
- loading PostgreSQL and Redis settings using `ConfigService`
- validating required environment variables with Joi
- confirming startup fails when required variables are missing
- restoring the `.env` file and confirming the application starts successfully
- ensuring `.env` is not committed to Git
