Setting Up Docker and Docker Compose
Installing Docker and Docker Compose
Docker Desktop involves both Docker Engine plus Docker Compose. After installation, Docker can be tested using:
```bash
docker --version
docker compose version
```
To confirm Docker is running properly:

```bash
docker ps
```

Common Docker Commands
List running containers
```bash
docker ps
```

List all containers
```bash
docker ps -a
```

Start a container
```bash
docker start <container_name>
```

Stop a container
```bash
docker stop <container_name>
```

Restart a container
```bash
docker restart <container_name>
```

View container logs
```bash
docker logs <container_name>
```

View running Docker images
```bash
docker images
```

Docker Compose
Docker Compose allows numerous containers to be accomplished by means of a single configuration file (`docker-compose.yml` or `compose.yaml`).

Instead of starting every container independently, Docker Compose can lead an whole application stack with one command.

Example:

```bash
docker compose up
```

To stop all services:

```bash
docker compose down
```

Reflection
What is the difference between `docker run` and `docker compose up`?

`docker run` starts a distinct container from an image consuming command-line options. `docker compose up` starts all services distinct in a Docker Compose configuration file, making it ideal for applications with manifold containers such as databases, APIs, and caching services.

How does Docker Compose help when working with multiple services?
Docker Compose mechanically starts plus connects multiple containers together. It simplifies development by permitting the entire application stack to be launched, stopped, plus configured with a single command.

What commands can you use to check logs from a running container?
Beneficial commands include:

```bash
docker logs <container_name>
```

or for Docker Compose:

```bash
docker compose logs
```

These commands show application output besides help diagnose errors.

What happens when you restart a container? Does data persist?
Restarting a container does not automatically delete its data. However, data stored only private the container may be lost if the container is impassive. Persistent data should be stored using Docker volumes or bind mounts, so it remains available even after containers are remade.

