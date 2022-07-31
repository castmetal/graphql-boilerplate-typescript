FROM node:16.15-alpine3.15

WORKDIR /home
ENV NEW_RELIC_NO_CONFIG_FILE=true
COPY . .

RUN apk add --no-cache python3 g++ make && rm -rf /var/cache/apk/* \
    && npm ci \
    && npm run build

EXPOSE 80

CMD ["npm", "run", "start"]
