FROM alpine:3.7
EXPOSE 80
RUN apk update && apk add nginx && apk add openrc --no-cache && adduser -D -g 'www' www && mkdir /www && chown -R www:www /var/lib/nginx \
    && chown -R www:www /www && mv /etc/nginx/nginx.conf /etc/nginx/nginx.conf.orig \
    && mkdir -p /run/nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY *.html /www
RUN nginx -t
CMD ["nginx", "-g", "daemon off;"]