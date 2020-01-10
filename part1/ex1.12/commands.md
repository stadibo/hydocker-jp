### Updated dockerfiles in the frontend and backend folders.

### Commands used to build and run

#### frontend

```
docker build -t frontend-example .
docker run -d -p 5000:5000 frontend-example
```

#### backend

```
docker build -t backend-example .
docker run -d -p 8000:8000 -v "$(pwd)"/backend-example-docker/logs.txt:/example/backend/logs.txt backend-example
```