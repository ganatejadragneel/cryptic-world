FROM php:7.4-apache

# Set the FLAG environment variable
ENV FLAG=CTF_SDaT{Luffy_Zoro}


COPY index.php /var/www/html/
COPY styles.css /var/www/html/
COPY script.js /var/www/html/
COPY api.php /var/www/html/

# Expose the port
EXPOSE 4500