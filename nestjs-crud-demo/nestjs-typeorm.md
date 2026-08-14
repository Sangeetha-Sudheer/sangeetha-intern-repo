# 7.4 Connecting to PostgreSQL with TypeORM in NestJS

## What I implemented

I connected my NestJS application to PostgreSQL using TypeORM.

I created a local PostgreSQL database called `focusbear_db` and configured NestJS using `TypeOrmModule`.

I created a `User` entity containing:

- id
- name
- email

I registered the entity using `TypeOrmModule.forFeature([User])` and injected the TypeORM repository into `UsersService`.

I replaced the previous in-memory user storage with PostgreSQL-backed CRUD operations.

I successfully tested:

- POST `/users` - create a user
- GET `/users` - retrieve users
- GET `/users/:id` - retrieve one user
- PUT `/users/:id` - update a user
- DELETE `/users/:id` - delete a user

## How does @nestjs/typeorm simplify database interactions?

`@nestjs/typeorm` integrates TypeORM into the NestJS module and dependency injection system.

It allows repositories to be registered in a module and injected into services using `@InjectRepository`.

This makes database logic easier to organise and avoids manually creating database connections throughout the application.

## What is the difference between an entity and a repository?

An entity defines the structure of a database table.

For example, my `User` entity defines the `id`, `name`, and `email` columns.

A repository provides methods for interacting with the data stored for that entity.

I used repository methods such as `find`, `findOneBy`, `save`, `preload`, and `remove`.

## How does TypeORM handle migrations?

Migrations record database schema changes as files.

They allow database changes to be tracked and applied consistently between environments.

For this local learning task, I used `synchronize: true` so TypeORM automatically created the schema from my entity.

For a production application, migrations would be safer for managing schema changes.

## Advantages of PostgreSQL

PostgreSQL provides:

- relational data modelling
- transactions
- constraints
- strong data consistency
- support for complex queries
- good integration with TypeORM

It is suitable for backend applications that need structured and reliable data storage.

## Evidence

The NestJS application successfully started with TypeORM connected to PostgreSQL.

I tested all CRUD operations successfully.

- POST created a user.
- GET returned the saved user.
- PUT updated the user's name.
- GET by ID returned the updated user.
- DELETE removed the user.
- The final GET returned an empty array.

The application also compiled with zero errors.

