FROM node:18-alpine AS base
LABEL maintainer="paul@pcraig.ca"

# Install dependencies only when needed
FROM base AS deps

ENV PORT 3000

# Add GITHUB_SHA_ARG if it exists
ARG GITHUB_SHA_ARG
ENV GITHUB_SHA=$GITHUB_SHA_ARG

# Add ANALYTICS_ID_ARG if it exists
ARG ANALYTICS_ID_ARG
ENV ANALYTICS_ID=$ANALYTICS_ID_ARG

# Add OPENAI_API_KEY_ARG if it exists
ARG OPENAI_API_KEY_ARG
ENV OPENAI_API_KEY=$OPENAI_API_KEY_ARG

# Add TYPEBOT_ID_ARG if it exists
ARG TYPEBOT_ID_ARG
ENV TYPEBOT_ID=$TYPEBOT_ID_ARG

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
