FROM node AS development

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -D webpack-cli

RUN npm install --save-dev @vue/cli-service@latest

COPY . .

RUN npm run build

#FROM nginx:1.19.0-alpine AS pro

#COPY --from=development /app/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["npm", "run", "serve"]
#CMD ["nginx", "-g", "daemon off;"]