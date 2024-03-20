FROM node:20-alpine as builder
WORKDIR /promis-front

COPY yarn.lock package.json ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM node:20-alpine as runner
WORKDIR /promis-front
COPY --from=builder /promis-front/package.json .
COPY --from=builder /promis-front/yarn.lock .
COPY --from=builder /promis-front/next.config.mjs ./
COPY --from=builder /promis-front/public ./public
COPY --from=builder /promis-front/.next/standalone ./
COPY --from=builder /promis-front/.next/static ./.next/static

EXPOSE 3000

ENTRYPOINT ["node", "server.js"]
