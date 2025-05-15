FROM node:20-alpine
WORKDIR /app-toto
RUN npm i -g serve

COPY ./package.json .
RUN npm i
COPY . .


RUN npm run build
EXPOSE 5001
CMD ["serve", "-s", "dist", "-p", "5001"]