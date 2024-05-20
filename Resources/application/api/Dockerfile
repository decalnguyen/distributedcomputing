FROM node:16-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . . 

CMD ["npm", "run", "develop"]