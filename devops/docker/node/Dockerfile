FROM node:latest as build

WORKDIR /var/www/html/financa-front
COPY . .
RUN npm install @angular/cli -g
CMD ["ng", "build", "--watch", "--configuration", "development"]
