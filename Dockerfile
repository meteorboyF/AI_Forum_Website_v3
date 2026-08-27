# syntax=docker/dockerfile:1

# ---------- build ----------
# The site is fully prerendered by @sveltejs/adapter-static, so Node is
# only needed to produce the files; nothing runs at serve time.
FROM node:22-alpine AS builder
WORKDIR /app

# Install dependencies first so this layer is cached until the lockfile moves.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Serving from the container root, so BASE_PATH stays empty (GitHub Pages
# is the only deployment that needs a sub-path). The EmailJS values are
# public-by-design and are inlined into the bundle at build time; leaving
# them unset falls back to the defaults in src/lib/config.ts.
ARG BASE_PATH=""
ARG VITE_EMAILJS_SERVICE_ID=""
ARG VITE_EMAILJS_TEMPLATE_ID=""
ARG VITE_EMAILJS_PUBLIC_KEY=""
ENV BASE_PATH=$BASE_PATH \
    VITE_EMAILJS_SERVICE_ID=$VITE_EMAILJS_SERVICE_ID \
    VITE_EMAILJS_TEMPLATE_ID=$VITE_EMAILJS_TEMPLATE_ID \
    VITE_EMAILJS_PUBLIC_KEY=$VITE_EMAILJS_PUBLIC_KEY

RUN npm run build

# ---------- serve ----------
# Unprivileged nginx: runs as uid 101 and listens on 8080, so the container
# needs no root user and no capabilities.
FROM nginxinc/nginx-unprivileged:1.27-alpine AS runner

COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder --chown=nginx:nginx /app/build /usr/share/nginx/html

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/ >/dev/null 2>&1 || exit 1

# The base image already sets a non-root USER and the correct entrypoint.
