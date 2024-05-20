FROM node:16-alpine

WORKDIR /app

ADD package*.json ./app

COPY . . 

RUN npm install

CMD ["npm", "run", "develop"]