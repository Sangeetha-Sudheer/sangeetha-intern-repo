# NestJS Bruno Reflection

## How does Bruno help with API testing compared to Postman or cURL?

Bruno provides a graphical interface for sending HTTP requests and testing API endpoints.

Compared with cURL, Bruno is easier for repeated testing because requests can be saved with their URLs, headers, body content, and authentication settings.

Compared with Postman, Bruno is lightweight and stores collections as local files, which makes them suitable for keeping inside a project repository and version controlling with Git.

## How do you send an authenticated request in Bruno?

An authenticated request can be sent by adding an `Authorization` header.

For Bearer token authentication, the header format is:

`Authorization: Bearer <token>`

In Bruno, this can be configured through the Headers or Auth section of a request.

## What are the advantages of organizing API requests in collections?

Collections help keep related API requests organised in one place.

They allow developers to:

- save frequently used API requests;
- group requests by feature or module;
- reuse headers and authentication settings;
- test endpoints more quickly;
- share API request setups with other developers;
- store API requests alongside the project.

## How would you structure a Bruno collection for a NestJS backend project?

I would organise the collection according to the NestJS modules or features.

For example:

- Users
  - GET users
  - GET user by ID
  - POST user
  - PATCH user
  - DELETE user
- Authentication
  - Protected route
  - Authenticated requests
- Jobs
  - Notification job requests

This structure makes the collection easier to navigate as the backend grows.

## What I implemented

I installed Bruno and created a collection called `Focus Bear NestJS API`.

I manually tested the public `GET /users` NestJS endpoint and received a successful `200 OK` response.

I also created a `POST /users` request with a JSON body and successfully created a new user. Bruno returned a `201 Created` response.

I explored how headers and Bearer authentication tokens can be added to requests for protected API routes.

Using Bruno helped me understand how to manually debug request URLs, HTTP methods, request bodies, headers, status codes, and API responses.
