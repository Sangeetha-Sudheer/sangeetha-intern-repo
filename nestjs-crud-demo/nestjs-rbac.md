# 8.1 Role-Based Authorization (RBAC) in NestJS

## What I implemented

I implemented role-based authorization in my NestJS application.

I created:

- a `Roles` decorator
- a `RolesGuard`
- a protected admin endpoint
- local authentication scaffolding to populate `request.user` for testing

The protected endpoint requires the `admin` role.

I tested three cases:

- no role -> 401 Unauthorized
- regular user role -> 403 Forbidden
- admin role -> 200 OK

## How does Auth0 store and manage user roles?

Auth0 RBAC allows permissions to be grouped into roles and roles to be assigned to users.

Roles can represent access levels such as `admin` or `user`. Permissions can then be associated with those roles instead of assigning permissions individually to each user.

Authorization information can be included in access tokens depending on the Auth0 configuration.

## What is the purpose of a guard in NestJS?

A guard determines whether a request is allowed to continue to a controller route.

It runs before the route handler and can inspect the authenticated user, roles, permissions, or route metadata.

In my implementation, the `RolesGuard` reads the role required by the route and compares it with the roles available on `request.user`.

## How would you restrict access to an API endpoint based on user roles?

I used:

`@Roles('admin')`

together with:

`@UseGuards(DemoAuthGuard, RolesGuard)`

The authentication guard provides the user role and the role guard verifies that the user has the required role.

If the user does not have the required role, the API returns 403 Forbidden.

## How are roles retrieved from an Auth0 access token?

The backend should first validate the Auth0 access token.

After validation, authorization information can be read from trusted token claims.

For this local implementation, I used a test request header to simulate authenticated roles so that I could demonstrate the RBAC logic without requiring a live Auth0 account.

In a production application, the role or permissions would come from validated Auth0 token claims rather than a custom request header.

## What are the security risks of improper authorization?

Improper authorization can cause:

- unauthorized access to protected endpoints
- privilege escalation
- data exposure
- unauthorized modification or deletion of data
- access to administrator functionality

These risks can be reduced by validating access tokens, enforcing authorization on the backend, using least privilege, and checking permissions or roles on protected routes.

## Evidence

I successfully tested the admin-protected endpoint.

- No role returned 401 Unauthorized.
- The `user` role returned 403 Forbidden.
- The `admin` role returned 200 OK and the response `Admin access granted`.

The NestJS project also compiled with zero errors and started successfully.
