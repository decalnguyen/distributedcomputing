FROM node AS development

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm install --save-dev @vue/cli-service@latest

RUN npm run build

FROM nginx:1.19.0-alpine AS pro

COPY --from=development /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]