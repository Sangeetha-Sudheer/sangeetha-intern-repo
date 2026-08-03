Creating REST APIs with NestJS

REST APIs in NestJS
NestJS makes it comfortable to build RESTful APIs operating controllers besides services. Controllers define the API endpoints, while services contain the business logic. This separation kinds applications calmer to maintain then test.

CRUD Routes
A typical REST API wires CRUD operations:
- **GET** – Retrieve resources
- **POST** – Create new resources
- **PUT** – Update existing resources
- **DELETE** – Remove resources

Example:
```typescript
@Controller('users')
export class UsersController {
  @Get()
  findAll() {}

  @Post()
  create() {}

  @Put(':id')
  update() {}

  @Delete(':id')
  remove() {}
}
```

Services
Business logic should be placed inside services instead of controllers.

Example:

```typescript
@Injectable()
export class UsersService {
  findAll() {
    return [];
  }

  create(user) {
    return user;
  }
}
```

The controller calls the service whensoever a request is conventional.
Testing Endpoints
REST endpoints can be tested by means of tools such as:
- Postman
- cURL
- Insomnia

These tools let developers to send HTTP requests besides verify responses.
Reflection
What is the role of a controller in NestJS?
A controller accepts incoming HTTP requests, maps them to the correct route, plus calls the suitable service methods to process the request afore giving a response.

How should business logic be separated from the controller?
Business logic should be located inside services. Controllers should first manage request handling besides delegate processing to services. This keeps the code modular besides easier to maintain.

Why is it important to use services instead of handling logic inside controllers?
Using services advances code organization, reassures code reuse, rationalises testing, advantageous keeps controllers inspired on handling HTTP desires somewhat than appreciating application logic.

How does NestJS automatically map request methods (GET, POST, etc.) to handlers?
NestJS procedures decorators such as `@Get()`, `@Post()`, `@Put()`, plus `@Delete()` to associate HTTP demand methods with controller methods. When a request comes, NestJS routes it to the matching handler mechanically.

Practical Implementation

I created a simple NestJS CRUD API using a `UsersController` and `UsersService`.

The following endpoints were implemented and tested successfully using `curl`:

- GET `/users`
- GET `/users/:id`
- POST `/users`
- PUT `/users/:id`
- DELETE `/users/:id`

The API started successfully with no compilation errors, and all CRUD operations returned the expected responses during testing.
