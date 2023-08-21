ARG NODEJS_VERSION=18.15.0-alpine3.16

FROM node:${NODEJS_VERSION} AS nodejs

FROM nodejs AS nodejs-build-stage

WORKDIR /tmp

COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install

FROM nodejs AS nodejs-run-stage

ARG APP_HOME=/app

WORKDIR ${APP_HOME}

COPY --from=nodejs-build-stage /tmp/node_modules ${APP_HOME}/node_modules

COPY ./compose/entrypoint /entrypoint
RUN sed -i 's/\r$//g' /entrypoint
RUN chmod +x /entrypoint

COPY . ${APP_HOME}
RUN yarn build

ENTRYPOINT ["/entrypoint"]

CMD ["yarn", "dev"]