FROM node:16-alpine AS build

WORKDIR /opt

COPY package*.json ./

RUN npm install

RUN npm install mysql2 --save

WORKDIR /opt/app

COPY . . 

RUN npm run build

FROM node:18-alpine AS product

RUN apk add --no-cache vips-dev

WORKDIR /opt

COPY --from=build /opt/node_modules ./node_modules

COPY --from=build /opt/app ./

EXPOSE 1337 

CMD ["npm", "run", "develop"]