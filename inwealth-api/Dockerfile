FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --silent
RUN npm install -g nodemon

COPY . .

EXPOSE 3000
CMD ["nodemon"]
