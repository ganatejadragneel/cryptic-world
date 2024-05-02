FROM php:7.4-apache

# Set the FLAG environment variable
ENV FLAG=CTF_SDaT{Luffy_Zoro}

RUN a2enmod rewrite

COPY index.php /var/www/html/
COPY styles.css /var/www/html/
COPY script.js /var/www/html/
COPY api.php /var/www/html/
COPY .htaccess /var/www/html/
COPY level2 /var/www/html/level2
COPY flag.php /var/www/html/

# Expose the port
EXPOSE 4500