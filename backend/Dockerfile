FROM node:14
# share directory
ENV ROOT="/app"
# add path env
ENV PATH $PATH:/usr/local/bin
# set home directory
RUN mkdir ${ROOT}
WORKDIR ${ROOT}

RUN apt-get update && apt-get upgrade -y
# install lib (opt : vim)
RUN apt-get install -y build-essential libpq-dev postgresql-client vim
# install NestJS
RUN npm install -g @nestjs/cli