Dependency Injection in NestJS

What is Dependency Injection?
Dependency Injection (DI) is a design pattern where a class accepts the objects it be contingent on rather than producing them itself. NestJS has a built-in dependency injection container that spontaneously creates besides achieves these dependencies.

This line makes applications extra modular, reusable, then easier to test.

Providers and the `@Injectable()` Decorator
Providers are classes that comprise refillable business logic. A provider develops obtainable for dependence injection by using the `@Injectable()` decorator.

Example:
```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers() {
    return ['Alice', 'Bob'];
  }
}
```

Injecting Services into Controllers
Controllers receive providers through constructor injection.

Example:

```typescript
import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.getUsers();
  }
}
```

NestJS mechanically creates the `UsersService` instance plus passes it to the controller.

Provider Scopes
NestJS supports three provider scopes:

Singleton (Default)
- One instance is shared crossways the entire application.
- Best for most services.
- Efficient plus memory-friendly.

Request

- A new instance is produced for every incoming HTTP request.
- Useful when stowing request-specific information.

Transient
- A novel instance is created every time the provider is injected.
- Useful when each consumer requires its own independent instance.

Reflection
How does dependency injection improve maintainability?
Dependency injection splits object creation from business logic. This decreases coupling between classes, advances code organization, then makes components cooler to replace, extend, and test.

What is the purpose of the `@Injectable()` decorator?
The `@Injectable()` decorator tells NestJS that a class can be achieved by the dependency injection container then injected into other classes when obligatory.

What are the different types of provider scopes, and when would you use each?
Singleton workers are fit for most shared services. Request-scoped workers are useful when both HTTP request wants its own instance. Transient workers are appropriate when each consumer must take a totally new object.

How does NestJS automatically resolve dependencies?
NestJS observes constructor parameters, recognizes the required providers, makes instances once necessary, besides injects them automatically over its dependency injection container. Developers only want to register workers within a module.

