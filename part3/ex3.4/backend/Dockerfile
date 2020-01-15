FROM node:10-alpine

ENV NODE_ENV=production

COPY ./backend-example-docker /example/backend
WORKDIR /example/backend

RUN npm install && chown -R node node_modules logs.txt

USER node
EXPOSE 8000

CMD ["node", "index.js"]