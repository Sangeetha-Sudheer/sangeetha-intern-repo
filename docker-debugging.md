Debugging and Managing Docker Containers
Inspecting Running Containers

To list running containers:
```bash
docker ps
```

To list all containers, including stopped containers:
```bash
docker ps -a
```

To view detailed information about a container:
```bash
docker inspect <container_name>
```

The `docker inspect` command can show information such as:
- Container IP address
- Environment variables
- Mounted volumes
- Network configuration
- Port mappings
- Container status

Checking Container Logs

To view logs from a running or stopped container:
```bash
docker logs <container_name>
```

To follow logs in real time:
```bash
docker logs -f <container_name>
```

To view only the latest log entries:

```bash
docker logs --tail 50 <container_name>
```

For Docker Compose services:
```bash
docker compose logs
```

To follow the logs for one service:
```bash
docker compose logs -f <service_name>
```

Entering a Running Container

To open an interactive shell inside a running container:
```bash
docker exec -it <container_name> /bin/bash
```

If Bash is not available:
```bash
docker exec -it <container_name> /bin/sh
```

This is useful for:
- Inspection files inside the container
- Seeing environment variables
- Testing network connections
- Running diagnostic commands
- Confirming that dependencies are installed

Restarting and Removing Containers
To stop a running container:
```bash
docker stop <container_name>
```

To restart a container:
```bash
docker restart <container_name>
```

To remove a stopped container:
```bash
docker rm <container_name>
```

To force-remove a running container:
```bash
docker rm -f <container_name>
```

For Docker Compose:
```bash
docker compose down
docker compose up -d
```

To rebuild services after changing the Dockerfile or dependencies:
```bash
docker compose up -d --build
```

Reflection
How can you check logs from a running container?

Container logs can be checked using:
```bash
docker logs <container_name>
```

The `-f` option can be used to shadow the output in real time. With Docker Compose, `docker compose logs` can display logs for all services or for one selected service.

What is the difference between `docker exec` and `docker attach`?
`docker exec` starts a new command or shell internal a running container. It is regularly the safer choice for debugging because it does not restrict with the container's main process.

`docker attach` connects straight to the container's main process. Keyboard input or interruption commands might affect that process, so it must be expended carefully.

How do you restart a container exclusive of losing data?
A container can be restarted using:
```bash
docker restart <container_name>
```
Data kept in Docker volumes or bind mounts rests accessible after a restart. Significant application then database data should not be kept only in the container's writable layer as it could be lost if the container is uninvolved plus reconstructed.

How can you troubleshoot database connection issues confidential a containerized NestJS application?
I would use the following process:
1. Check whether the NestJS plus database containers are running with `docker ps`.
2. Review the application besides database logs using `docker compose logs`.
3. Ratify that the database host, port, username, password, besides database name are correct.
4. Use the Docker Compose service name as the database host in its place of `localhost`.
5. Review the containers plus network configuration with `docker inspect`.
6. Enter the NestJS container by means of `docker exec -it` and test whether the database service can be reached.
7. Confirm that together services are connected to the same Docker network.
8. Check whether the database is prepared earlier the NestJS application efforts to connect.
9. Restart or rebuild the services later correcting the configuration.

