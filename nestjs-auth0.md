# NestJS Authentication with Auth0 & JWT

## How does Auth0 handle authentication compared to traditional username/password authentication?

With traditional username/password authentication, the application usually handles login logic itself and may store password hashes in its own database.

Auth0 acts as an external identity provider. Users authenticate through Auth0, and Auth0 issues tokens that the application can use to identify and authorize users.

This reduces the amount of authentication logic that must be implemented and maintained directly in the application.

## What is the role of JWT in API authentication?

JWT stands for JSON Web Token.

A JWT contains claims about a user or session and is digitally signed so the backend can verify that it has not been changed.

The client normally sends the JWT in the Authorization header:

`Authorization: Bearer <token>`

The backend verifies the token before allowing access to protected API routes.

## How do jwks-rsa and public/private key verification work in Auth0?

Auth0 signs access tokens using a private key.

The backend does not need the private key. Instead, it retrieves Auth0's public signing keys from the JWKS endpoint.

The `jwks-rsa` package helps retrieve the correct public key using the token's `kid` value.

The backend then uses the public key to verify the JWT signature.

This confirms that the token was issued by the trusted Auth0 service and has not been modified.

## How would you protect an API route so that only authenticated users can access it?

In NestJS, a route can be protected using a Guard.

The Guard checks the Authorization header, extracts the Bearer token, and verifies the JWT.

If the token is missing or invalid, the request is rejected with a `401 Unauthorized` response.

If the token is valid, the request can continue to the protected route.

## What I implemented

I created an Auth0/JWT authentication module in NestJS.

I added:

- an `Auth0JwtGuard`;
- a protected `/auth0/protected` endpoint;
- JWT verification logic;
- JWKS public-key lookup using `jwks-rsa`;
- checks for Auth0 domain and audience;
- handling for missing and invalid access tokens.

I tested the protected route without a token and confirmed that the API returned:

`401 Unauthorized`

with:

`Missing bearer token`

This confirmed that the route is protected and cannot be accessed without authentication.
