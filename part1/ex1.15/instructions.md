# https://hub.docker.com/repository/docker/peterzon/friseur-manager

## Running friseurManager application from image

Replace port with desired port on host

```
docker run -d -p PORT:5000 peterzon/friseur-manager
```

## [Install instructions for friseurManager](https://github.com/stadibo/friseurManager/blob/master/documentation/installation_guide.md)

## Build image for friseurManager

### Clone the repo branch https://github.com/stadibo/friseurManager/tree/dockerization

If not on the dockerization branch, switch to it:
```
cd friseurManager // if not in directory
git checkout dockerization
```

### Build command

```
docker build -t friseur-manager .
```

### Run image

```
docker run -d -p 5000:5000 friseur-manager
```