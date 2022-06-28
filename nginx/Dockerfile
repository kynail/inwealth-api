# Utiliser une image récente d'Nginx
FROM nginx:1

# Supprimer la nginx.conf par défaut
# et créer client_body_temp
RUN rm /etc/nginx/conf.d/default.conf && \
	mkdir -p /var/nginx/client_body_temp


# Ajouter une nginx.conf personnalisée et certs
COPY nginx.conf /etc/nginx/conf.d/
COPY certs /etc/nginx/certs
