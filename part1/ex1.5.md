### Full start command

```
docker run -it --name site-reader ubuntu:latest sh -c 'apt-get update && apt-get install -y curl; echo "Input website:"; read website; echo "Searching.."; sleep 1; curl http://$website;'
```

Added the command to the start of the process line:

```
apt-get update && apt-get install -y curl;
```
