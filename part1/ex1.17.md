# MERN SKELETON

https://hub.docker.com/repository/docker/peterzon/mern-skeleton

Docker image containing a Javascript full stack MERN development environment.

The container includes a single repo style full stack application using the MERN (Mongo, Express, React, Node). It serves as a starting point for a full stack project. The included functionality is basically a skeleton.

I find it as an easy setup for quick experimentation / prototyping.

### Commands

```
docker run -it -p --name skeleton 3000:3000 peterzon/mern-skeleton
// in another terminal
docker exec -it skeleton bash
```

The first terminal (bash process): in root (backend) to run development mode. 

```
npm install
npm run watch 
```

The second terminal (other bash process): access frontend folder to run development mode. 

```
cd frontend
npm install
npm start
```

### Alt start for running local files inside the container

```
docker run -it -v $(pwd)/data:/usr/src/app/data --name skeleton peterzon/mern-skeleton
```