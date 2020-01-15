FROM node:10-alpine

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
# ENV API_URL=http://localhost:8000 If not defined in docker-compose


COPY ./frontend-example-docker /example/frontend
WORKDIR /example/frontend

RUN npm install && \
  npm run build && \
  npm install -g serve && \
  rm -rf node_modules

USER node

EXPOSE 5000

ENTRYPOINT ["/bin/sh", "-c"]
CMD ["serve -s -l 5000 dist"]