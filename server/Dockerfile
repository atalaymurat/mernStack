FROM node:17-alpine AS builder

WORKDIR /usr/src/app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

COPY . .

RUN npm install -g nodemon
EXPOSE 4000

CMD ["nodemon", "server.js"]
