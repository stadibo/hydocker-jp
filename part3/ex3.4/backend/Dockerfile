FROM node:10-alpine

ENV NODE_ENV=production
# ENV FRONT_URL=http://localhost:5000 // if not defined in docker-compose

COPY ./backend-example-docker /example/backend
WORKDIR /example/backend


RUN npm install && chown -R node node_modules logs.txt

USER node
EXPOSE 8000

CMD ["node", "index.js"]