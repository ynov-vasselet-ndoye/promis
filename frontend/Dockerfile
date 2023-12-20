# syntax = docker/dockerfile:1

FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ARG PORT=3000

RUN corepack enable

WORKDIR /src

# Build
FROM base as build

COPY package.json .
COPY . .

RUN pnpm install --shamefully-hoist
RUN pnpm update


CMD ["pnpm", "run", "dev"]