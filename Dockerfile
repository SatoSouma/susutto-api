# ベースイメージの指定
FROM node:16-alpine as builder
RUN apk add --no-cache nodejs

ARG PORT
ARG HOST
ARG DBNAME
ARG USER
ARG PASS

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install 
COPY . .
RUN yarn build

FROM node:16-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# 最適なポート番号を入れるらいしい 実際に立ち上げてるポート番号と差異があっても影響なし　
EXPOSE 8010

# containerが立ち上がった時に実行されるコマンド
CMD [ "npm" , "start" ] 
