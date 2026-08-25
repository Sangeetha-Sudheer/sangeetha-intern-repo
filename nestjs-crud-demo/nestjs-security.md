# 8.4 Security Best Practices in NestJS

## What are the most common security vulnerabilities in a NestJS backend?

Common backend security risks include:

- injection attacks such as SQL injection
- cross-site scripting (XSS)
- cross-site request forgery (CSRF)
- insecure CORS configuration
- missing or weak HTTP security headers
- brute-force attacks
- denial-of-service abuse
- exposing sensitive environment variables
- improper authentication or authorization
- leaking detailed internal error information

NestJS applications should use validation, secure database access, authentication and authorization, rate limiting, HTTP security headers, and safe configuration management to reduce these risks.

## How does Helmet improve application security?

Helmet configures several HTTP security headers automatically.

These headers help protect the application against common browser-based attacks.

Examples include:

- `X-Content-Type-Options`
- `X-Frame-Options`
- `Content-Security-Policy`

In this task, I enabled Helmet globally in the NestJS application.

## Why is rate limiting important for preventing abuse?

Rate limiting restricts how many requests a client can make during a defined period.

This helps protect APIs against:

- brute-force attempts
- excessive automated requests
- accidental request floods
- denial-of-service style abuse

I configured NestJS throttling globally and tested it by making repeated requests until the API returned HTTP 429 Too Many Requests.

## How can sensitive configuration values be protected in production?

Sensitive values such as API keys, database credentials, and tokens should not be hard-coded in source code.

They should instead be supplied through environment variables or a secret-management system.

Production secrets should:

- not be committed to Git
- be stored in secure secret-management systems
- use least-privilege access
- be rotated when required
- be validated when the application starts

This project uses NestJS ConfigModule to load configuration from environment variables.

## Evidence

I verified this task by:

- enabling Helmet security headers
- configuring CORS explicitly
- adding global rate limiting
- successfully building and starting the NestJS application
- confirming HTTP security headers using `curl -I`
- sending repeated requests and receiving HTTP 429 after the configured limit
- confirming environment files are excluded from Git
