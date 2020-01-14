### BEFORE AND AFTER

```
➜ docker images
REPOSITORY                               TAG                 IMAGE ID            CREATED              SIZE
front-example-after                      latest              c5e19e3c5010        40 seconds ago       461MB
front-example-before                     latest              86afa8ea372a        33 minutes ago       489MB
back-example-after                       latest              3c790c6d21c7        About a minute ago   332MB
back-example-before                      latest              e8a2557d6091        32 minutes ago       360MB
```

### FRONTEND

```docker
FROM ubuntu:16.04

COPY ./frontend-example-docker /example/frontend
WORKDIR /example/frontend

RUN apt-get update && apt-get install -y curl && \
  curl -sL https://deb.nodesource.com/setup_10.x | bash && \
  apt-get install -y nodejs && \
  apt-get purge -y --auto-remove curl && \ 
  rm -rf /var/lib/apt/lists/* && \
  npm install && \
  npm run build && \
  npm install -g serve

EXPOSE 5000

ENTRYPOINT ["/bin/sh", "-c"]
CMD ["serve -s -l 5000 dist"]
```

### BACKEND

```docker
FROM ubuntu:16.04

COPY ./backend-example-docker /example/backend
WORKDIR /example/backend

RUN apt-get update && apt-get install -y curl && \
  curl -sL https://deb.nodesource.com/setup_10.x | bash && \ 
  apt-get install -y nodejs && \
  npm install && \
  apt-get purge -y --auto-remove curl && \ 
  rm -rf /var/lib/apt/lists/*


EXPOSE 8000

ENTRYPOINT ["/bin/sh", "-c"]
CMD ["npm start"]
```
