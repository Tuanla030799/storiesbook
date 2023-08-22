# Build BASE
FROM node:18.15.0-alpine3.16 AS BASE
WORKDIR /app
COPY package.json yarn.lock ./
RUN apk add --no-cache git \
    && yarn install --frozen-lockfile \
    && yarn cache clean

# Build Image
FROM node:18.15.0-alpine3.16 AS BUILD
WORKDIR /app
COPY --from=BASE /app/node_modules ./node_modules
COPY . .
RUN apk add --no-cache git curl \
    && yarn build \
    && rm -rf node_modules \
    && yarn install --production --frozen-lockfile --ignore-scripts --prefer-offline \
    && curl -sf https://gobinaries.com/tj/node-prune | sh -s -- -b /usr/local/bin \
    && apk del curl

# Build production
FROM node:18.15.0-alpine3.16 AS PRODUCTION
WORKDIR /app

COPY --from=BUILD /app/package.json /app/yarn.lock ./
COPY --from=BUILD /app/node_modules ./node_modules
COPY --from=BUILD /app/.next ./.next
COPY --from=BUILD /app/public ./public

# COPY --from=BUILD /app/public ./public
# COPY --from=BUILD /app/next.config.js ./

# # Set mode "standalone" in file "next.config.js"
# COPY --from=BUILD /app/.next/standalone ./
# COPY --from=BUILD /app/.next/static ./.next/static
# COPY --from=BUILD /app/.next/server ./.next/server

CMD ["yarn", "start"]
