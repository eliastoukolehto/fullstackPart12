FROM node:20 AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV VITE_BACKEND_URL="api"

RUN npm run build

FROM node:20 AS test-stage

RUN npm run test

FROM node:20 AS deploy-stage

WORKDIR /usr/src/app

COPY --from=build-stage /usr/src/app/ /usr/src/app/

CMD ["npm","run", "preview", "--", "--host"]