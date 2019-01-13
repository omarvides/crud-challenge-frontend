FROM nginx:1.14-alpine as production
LABEL maintainer="omarvides@gmail.com"
WORKDIR /var/www/html
COPY dist .
WORKDIR /etc/nginx/conf.d/
COPY files/default.conf .
EXPOSE 80

FROM nginx:1.14-alpine as staging
LABEL maintainer="omarvides@gmail.com"
WORKDIR /var/www/html
COPY staging .
WORKDIR /etc/nginx/conf.d/
COPY files/default.conf .
EXPOSE 80