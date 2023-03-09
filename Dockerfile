FROM node:18-alpine AS base
LABEL maintainer="paul@pcraig3.ca"

# Install dependencies only when needed
FROM base AS deps

ENV PORT 3000

# Add GITHUB_SHA_ARG if it exists
ARG GITHUB_SHA_ARG
ENV GITHUB_SHA=$GITHUB_SHA_ARG

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Copying source files
COPY package*.json /app/
COPY . /app/

# Installing dependencies
RUN npm install --production --silent

# Building app
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start:production"]
