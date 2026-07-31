Validating Requests with Pipes in NestJS

What are Pipes?
Pipes are classes in NestJS that process inward request data afore it gets the controller. They are mostly used for validation besides transformation, safeguarding requests contain valid plus properly formatted data.

Built-in Pipes
NestJS provides several built-in pipes, including:
- ValidationPipe – Validates request bodies by means of DTOs plus class-validator decorators.
- ParseIntPipe – Alters route parameters into integers.
- ParseBoolPipe – Converts values into booleans.
- ParseUUIDPipe – Validates UUID strings.
- ParseArrayPipe – Validates arrays.

These built-in pipes diminish boilerplate code plus improve application dependability.

DTO Validation
DTOs (Data Transfer Objects) define the predictable structure of received requests.

Example:
```typescript
export class CreateUserDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;
}
```

Using ValidationPipe composed with DTOs confirms that invalid requests are disallowed before success the business logic.

Global Validation Pipe
Validation can be enabled globally in `main.ts`:

```typescript
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true,
  }),
);
```

Benefits comprise:
- Automatic request endorsement
- Type transformation
- Elimination of unwelcome properties
- Enhanced API security
- Consistent authentication throughout the application

Reflection
What is the purpose of pipes in NestJS?

Pipes validate plus transform received request data afore it spreads controller methods. They confirm controllers receive correctly formatted data plus lessen runtime errors.

How does ValidationPipe improve API security and data integrity?
ValidationPipe checks incoming requests alongside DTO validation rules, discards invalid data, eliminates unexpected properties, plus prevents malformed or malicious input from reaching the application's business logic.

What is the difference between built-in and custom pipes?
Built-in pipes offer common validation plus transformation features such as parsing integers or validating DTOs. Custom pipes agree developers to device application-specific validation or transformation logic personalised to their project's needs.

How do decorators like @IsString() and @IsNumber() work with DTOs?
These decorators express validation rules for DTO properties consuming the class-validator library. ValidationPipe reads these decorators through request processing plus verifies that external data satisfies all quantified constraints beforehand momentary it to the controller.


