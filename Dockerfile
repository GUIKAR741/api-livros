FROM debian:latest

RUN apt-get update &&           \
    apt-get install -y  nodejs  \
                        npm  && \
    npm install -g nodemon &&   \
    mkdir /usr/src/app

WORKDIR /usr/src/app

EXPOSE 8080

VOLUME /usr/src/app

CMD npm start