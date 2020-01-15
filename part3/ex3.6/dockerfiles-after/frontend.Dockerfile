FROM node:8.9.4-alpine as base

FROM base as builder

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm i && npm run build

FROM base

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global \
  PATH=$PATH:/home/node/.npm-global/bin

COPY --from=builder /usr/src/app/build /app/build
WORKDIR /app
RUN npm install -g serve

EXPOSE 3000
USER node

CMD ["serve", "-s", "-l", "3000", "build"]