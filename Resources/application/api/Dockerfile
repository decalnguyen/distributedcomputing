FROM node:16-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . . 

EXPOSE 1337 

CMD ["npm", "run", "start"]