FROM node:18 as build

WORKDIR /app

COPY package*.json ./
ARG SONGS_LIBRARY_API
ENV VITE_SONGS_LIBRARY_API=$SONGS_LIBRARY_API
RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
