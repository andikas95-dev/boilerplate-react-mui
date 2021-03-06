FROM nginx:1.16.0-alpine
COPY build/ /usr/share/nginx/html/
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
ADD start.sh /usr/local/bin/
RUN ["chmod", "+x", "/usr/local/bin/start.sh"]

EXPOSE 80
ENTRYPOINT ["/usr/local/bin/start.sh"]