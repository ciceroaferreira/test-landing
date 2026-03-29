# ─── Stage 1: deps ──────────────────────────────────────────────────────────
FROM node:20-alpine AS deps

# libc6-compat is needed by some native Node modules on Alpine
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy only the manifests so this layer is cached until they change
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./

# Install production + dev dependencies (dev deps are needed at build time)
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  elif [ -f yarn.lock ];       then yarn --frozen-lockfile; \
  elif [ -f pnpm-lock.yaml ];  then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else npm install; \
  fi


# ─── Stage 2: build ─────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Bring in installed node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy the full source tree
COPY . .

# Disable Next.js telemetry during the build
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build


# ─── Stage 3: runner ────────────────────────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser  --system --uid 1001 nextjs

# Copy only what the standalone server needs
COPY --from=builder /app/public ./public

# Standalone build output and static assets
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static    ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
