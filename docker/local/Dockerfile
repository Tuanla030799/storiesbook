ARG NODEJS_VERSION=18.15.0-alpine3.16

FROM node:${NODEJS_VERSION} AS nodejs

ENV NODE_ENV development

RUN apk update && apk add --no-cache bash

WORKDIR /app

COPY . .

RUN yarn install

CMD [ "yarn", "dev"]