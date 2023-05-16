FROM alpine:3.17

RUN apk update && apk add nodejs
RUN apk add --update npm

# Copie les fichiers de l'application dans le conteneur
COPY ./back /usr/src/app
COPY ./front /usr/src/app

EXPOSE 3000

CMD ["npm", "start"]