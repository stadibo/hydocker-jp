FROM node:10-alpine AS builder

ENV API_URL=http://localhost:8000

COPY ./frontend-example-docker /app-build
WORKDIR /app-build
RUN npm install && npm run build

FROM node:10-alpine

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global \
  PATH=$PATH:/home/node/.npm-global/bin

COPY --from=builder /app-build/dist /app/dist
WORKDIR /app

RUN npm install -g serve

USER node
EXPOSE 5000

ENTRYPOINT ["/bin/sh", "-c"]
CMD ["serve -s -l 5000 dist"]