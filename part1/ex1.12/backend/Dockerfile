FROM ubuntu:latest

COPY ./backend-example-docker /example/backend

WORKDIR /example/backend

ENV FRONT_URL=http://localhost:5000

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt-get install -y nodejs
RUN npm install

EXPOSE 8000


ENTRYPOINT ["/bin/sh", "-c"]
CMD ["npm start"]