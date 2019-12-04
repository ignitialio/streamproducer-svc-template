FROM node:12-alpine

RUN mkdir -p /opt && mkdir -p /opt/streamproducer

ADD . /opt/streamproducer

WORKDIR /opt/streamproducer

RUN npm install && npm run client:build

CMD ["node", "./server/index.js"]
