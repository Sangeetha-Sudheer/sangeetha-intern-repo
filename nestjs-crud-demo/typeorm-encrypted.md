# Using typeorm-encrypted for Data Encryption

## Why does Focus Bear double encrypt sensitive data instead of relying on database encryption alone?

Database encryption at rest protects the database files if the storage system is accessed directly. However, field-level encryption adds another layer of protection for specific sensitive values. Even if someone gains access to the database contents, encrypted fields are not readable without the application encryption key.

## How does typeorm-encrypted integrate with TypeORM entities?

typeorm-encrypted uses a transformer on a TypeORM column. When data is saved, the transformer encrypts the value before it is stored in PostgreSQL. When the value is retrieved through TypeORM, the transformer decrypts it automatically before returning it to the application.

## What are the best practices for securely managing encryption keys?

Encryption keys should not be hard-coded in source code. They should be stored securely using environment variables or a secrets management system. The `.env` file should also be excluded from Git using `.gitignore`. Keys should be rotated when necessary and should never be exposed in screenshots, commits, or logs.

## What are the trade-offs between encrypting at the database level vs. the application level?

Database-level encryption protects the database storage as a whole and is generally transparent to the application. Application-level encryption protects selected fields before they are written to the database, providing stronger protection for sensitive data. However, application-level encryption adds complexity because encryption keys must be managed securely and encrypted fields may be harder to search or query.

## Testing

I added an encrypted `privateNote` field to the User entity using `typeorm-encrypted`.

I tested the implementation by creating a user through the NestJS API with a readable private note.

The PostgreSQL database stored the private note as encrypted ciphertext.

When the same user was retrieved through the NestJS API, the application decrypted the value and returned the original readable note.

This confirmed that field-level encryption and decryption were working successfully.
