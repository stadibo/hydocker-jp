FROM ubuntu:16.04

COPY ./frontend-example-docker /example/frontend
WORKDIR /example/frontend
# ENV API_URL=http://localhost:8000 If not defined in docker-compose

RUN apt-get update && apt-get install -y curl && \
  curl -sL https://deb.nodesource.com/setup_10.x | bash && \
  apt-get install -y nodejs && \
  apt-get purge -y --auto-remove curl && \ 
  rm -rf /var/lib/apt/lists/* && \
  npm install && \
  npm run build && \
  npm install -g serve && \
  useradd -m node-app && \
  chown -R node-app node_modules

USER node-app

EXPOSE 5000

ENTRYPOINT ["/bin/sh", "-c"]
CMD ["serve -s -l 5000 dist"]