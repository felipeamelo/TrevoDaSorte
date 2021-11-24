FROM nginx:alpine

### Rodar dentro de dist! ###

COPY site-frontend /usr/share/nginx/html

# Habilitar compressão e direcionar para index.html
RUN sed -i "s/#gzip  on;/gzip  on;\n    gzip_vary on;\n    gzip_types text\/plain text\/css application\/json application\/javascript application\/x-javascript text\/xml application\/xml application\/xml+rss image\/svg+xml text\/javascript;/" /etc/nginx/nginx.conf && \
    sed -i "s/location \/ {/\0\n        try_files \$uri \$uri\/ \/index.html;/" /etc/nginx/conf.d/default.conf
