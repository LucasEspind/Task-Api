FROM node:16.19.1-alpine3.17

# create destination directory
RUN mkdir -p /usr/src/task-api
WORKDIR /usr/src/task-api

# Update and install dependency
RUN apk update && apk upgrade
RUN apk add git
# docker-compose bash command dependency
RUN apk add bash

RUN rm -rf ./node_modules
RUN rm -rf package-lock.json

# Install app dependencies
COPY ./package.json .
RUN npm install

# Bundle app source
COPY . .

# run task-api
CMD npm start