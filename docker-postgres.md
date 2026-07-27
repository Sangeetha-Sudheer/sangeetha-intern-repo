Running PostgreSQL in Docker
Running PostgreSQL in a Docker Container
PostgreSQL can be run inside a Docker container without installing it straight on the host machine. Docker offers an isolated environment with all compulsory dependencies, creation setup plus maintenance easier.

A typical Docker Compose configuration includes:
```yaml
version: "3.9"

services:
  postgres:
    image: postgres:16
    container_name: postgres-db
    restart: unless-stopped
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
      POSTGRES_DB: appdb
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

Start the database with:

```bash
docker compose up -d
```

Stop it with:

```bash
docker compose down
```

Connecting to PostgreSQL
Once the container is running, it can be retrieved using tools such as:
- pgAdmin
- psql
- DBeaver
- TablePlus

Example connection details:
- Host: localhost
- Port: 5432
- Username: postgres
- Password: password
- Database: appdb

Docker Volumes
Docker volumes store PostgreSQL data outside the container.

This means that if the container is stopped, restarted, or recreated, the database files continue to be available as long as the Docker volume is treated.

Without volumes, all database data would be lost when the container is removed.

Reflection
What are the benefits of running PostgreSQL in a Docker container?
Running PostgreSQL in Docker provides a dependable development environment across different machines. It shortens installation, eludes conflicts with locally installed software, plus makes it easy to start or eliminate database instances when required.
How do Docker volumes help persist PostgreSQL data?
Docker volumes stock database files independently of the container. This lets data to continue available even if the PostgreSQL container is saved or recreated, preventing accidental data loss throughout development.

How can you connect to a running PostgreSQL container?
A running PostgreSQL container can be retrieved using tools such as pgAdmin, psql, DBeaver, or TablePlus. Applications can also connect expending the container's host, port, username, password, plus database name clear in the Docker Compose configuration.

