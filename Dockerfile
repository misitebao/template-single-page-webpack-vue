FROM nginx

LABEL maintainer="Misitebao"

COPY dist/ /usr/share/nginx/html/
COPY nginx.default.conf /etc/nginx/conf.d/default.conf
# 这里需要和 webpack-dev-server 中的端口保持一致
EXPOSE 3000