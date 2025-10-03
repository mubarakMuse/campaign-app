# Stage 1: Build React app
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# 👇 Accept VITE_API_URL from docker-compose
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

# Copy default nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
