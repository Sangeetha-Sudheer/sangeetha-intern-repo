Setting Up a NestJS Project

Steps I Followed

I created a new NestJS project using the NestJS CLI.

Commands I used:

```bash
npx @nestjs/cli new nestjs-crud-demo
cd nestjs-crud-demo
npm run start:dev
```

The application started successfully and was available at:

http://localhost:3000

Default Project Structure

The default NestJS project included:

- main.ts
- app.module.ts
- app.controller.ts
- app.service.ts
- package.json
- tsconfig.json
- src/
- test/

This structure separates the application into modules, controllers, and services, making it easier to maintain.

How main.ts Bootstraps the Application

The `main.ts` file is the application's entry point.

It creates the Nest application using `NestFactory.create(AppModule)` and starts the server by calling `app.listen(3000)`.

Role of AppModule

`AppModule` is the root module of the application.

It imports modules and registers controllers and services used by the application. Every feature module is connected through the root module.

Testing the Application

I started the development server using:

```bash
npm run start:dev
```

I tested the application by opening:

```
http://localhost:3000
```

I also tested the `/users` endpoint using curl after creating the CRUD API.

Example:

```bash
curl http://localhost:3000/users
```

The endpoint returned a JSON response successfully.

Reflection

Creating the project helped me understand the standard NestJS structure and how modules, controllers, and services work together. Running the development server and testing the endpoints gave me confidence using the NestJS framework.
