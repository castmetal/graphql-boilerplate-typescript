FROM node:11
ARG NPM_TOKEN
EXPOSE 4000
WORKDIR /home
COPY . /home/
RUN echo "registry=http://registry.npmjs.org/" > .npmrc && echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" >> .npmrc && npm config set registry http://registry.npmjs.org
RUN npm install && npm run build
CMD ["npm", "run", "start"]
