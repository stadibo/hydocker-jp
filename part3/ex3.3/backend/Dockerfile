FROM ubuntu:16.04

COPY ./backend-example-docker /example/backend
WORKDIR /example/backend
# ENV FRONT_URL=http://localhost:5000 // if not defined in docker-compose


RUN apt-get update && apt-get install -y curl && \
  curl -sL https://deb.nodesource.com/setup_10.x | bash && \ 
  apt-get install -y nodejs && \
  npm install && \
  apt-get purge -y --auto-remove curl && \ 
  rm -rf /var/lib/apt/lists/* && \
  useradd -m node-app && \
  chown -R node-app node_modules logs.txt

USER node-app

EXPOSE 8000

ENTRYPOINT ["/bin/sh", "-c"]
CMD ["npm start"]