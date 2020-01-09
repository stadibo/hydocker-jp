Build command
```
docker build -t backend-example .
```

Run command
```
docker run -d -p 8000:8000 -v "$(pwd)"/backend-example-docker/logs.txt:/example/backend/logs.txt backend-example
```

Navigate to http://localhost:8000 in a browser