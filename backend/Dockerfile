FROM node:18
# Installing libvips-dev for sharp Compatability
RUN apt-get update && apt-get install libvips-dev -y
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR app/backend
COPY package.json .
COPY yarn.lock .
COPY . .
RUN rm -rf node_modules package-lock.json
RUN yarn config set network-timeout 600000 -g && yarn install
RUN yarn build
EXPOSE 1337
CMD ["yarn", "develop"]
