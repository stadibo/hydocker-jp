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