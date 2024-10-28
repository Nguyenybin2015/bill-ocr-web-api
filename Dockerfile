FROM node:18.20.4-alpine AS nodemodule
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

FROM nodemodule AS builder
WORKDIR /app
COPY . .
COPY --from=nodemodule /app/node_modules ./node_modules
RUN npm run build

FROM nodemodule AS runner
WORKDIR /app

RUN apk add --no-cache alpine-conf && \
    setup-timezone -z Asia/Bangkok

COPY --from=builder /app/dist ./
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/ecdsa.key ./keys/ecdsa.key
COPY --from=builder /app/ecdsa.pub ./keys/ecdsa.pub
COPY --from=builder /app/.env ./.env
COPY --from=builder /app/run-container.sh ./run-container.sh
COPY --from=builder /app/tsconfig.build.json ./tsconfig.build.json
COPY --from=builder /app/tsconfig.json ./tsconfig.json

EXPOSE 3000

CMD ["/bin/sh", "run-container.sh"]
