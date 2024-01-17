# syntax = docker/dockerfile:1

FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ARG PORT=3000

RUN corepack enable

WORKDIR /app/frontend/

# Build
FROM base AS build

COPY package.json .

COPY . .
# Supprimer node_modules et pnpm-lock.yaml, puis réinstaller les dépendances
RUN rm -rf node_modules package-lock.json
RUN npm install
RUN pnpm install --shamefully-hoist
RUN pnpm update

# Installer nuxt globalement
RUN pnpm add -g nuxt

CMD ["pnpm", "run", "dev"]