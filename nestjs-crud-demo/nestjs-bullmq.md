# 7.6 Background Jobs with BullMQ & Redis in NestJS

## What I implemented

I integrated BullMQ with Redis in my NestJS application.

I created a `notifications` queue, a service that adds jobs to the queue, and a BullMQ processor that executes the queued work asynchronously.

I also created a POST endpoint so that I could trigger a real background job and verify that the worker received and completed it.

Redis was running locally and BullMQ used Redis to store and manage the queue.

## Why is BullMQ used instead of handling tasks directly in API requests?

Background queues allow time-consuming work to run separately from the original HTTP request.

If tasks such as notifications, analytics processing, or data synchronization were performed directly inside an API request, the user could have to wait until all the work finished.

BullMQ allows the API to queue the work and respond quickly while a worker processes the job in the background.

This helps keep the backend responsive and makes longer-running work easier to manage.

## How does Redis help manage job queues in BullMQ?

BullMQ uses Redis as the storage layer for its queues.

Redis stores information about jobs, including queued, active, completed, delayed, and failed jobs.

Workers retrieve jobs from the queue through Redis and update their state as they are processed.

During my implementation I verified this by running Redis locally and inspecting BullMQ keys created for the `notifications` queue.

## What happens if a job fails? How can failed jobs be retried?

BullMQ can automatically retry failed jobs.

For my test job I configured:

- 3 attempts
- exponential backoff
- an initial backoff delay of 1000 ms

If the processor throws an error, BullMQ can retry the job according to those settings.

Failed jobs can also be inspected so the cause of the failure can be investigated.

## How does Focus Bear use BullMQ for background tasks?

Based on this onboarding task, Focus Bear uses background processing for time-consuming work such as sending notifications, processing analytics, and synchronizing data.

Using BullMQ allows these operations to run asynchronously so that API requests remain responsive.

## Evidence

I verified the implementation by:

- installing BullMQ and the NestJS BullMQ integration
- running Redis locally and receiving `PONG` from `redis-cli ping`
- successfully compiling the NestJS application
- starting the application with zero errors
- adding a real notification job through the API
- observing the BullMQ processor receive and complete the job
- inspecting BullMQ queue data stored in Redis
