### RUN COMMANDS IN SAME DIRECTORY AS DOCKERFILE

```
docker build -t frontend-example:multi .
docker run -d --rm -p 5000:5000 frontend-example:multi
```

### Size difference

#### Old

```
➜ docker images
REPOSITORY                               TAG                 IMAGE ID            CREATED             SIZE
front-node                               latest              f00b74614033        12 minutes ago      134MB
```

#### New

```
➜ docker images
REPOSITORY                               TAG                 IMAGE ID            CREATED             SIZE
frontend-example                         multi               2c850d31b20e        3 minutes ago       89.9MB
```

