FROM ubuntu:latest

COPY ./frontend-example-docker /example/frontend

WORKDIR /example/frontend

ENV API_URL=http://localhost:8000

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt-get install -y nodejs
RUN npm install && npm run build

EXPOSE 5000


RUN npm install -g serve

ENTRYPOINT ["/bin/sh", "-c"]
CMD ["serve -s -l 5000 dist"]