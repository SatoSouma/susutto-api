# ベースイメージの指定
FROM node:16

# アプリケーションディレクトリ(コンテナ内)を作成する、下記コマンドがそこで実行される。
WORKDIR /app

# アプリケーションの依存関係をコンテナ内にコピーする
# ワイルドカードを使用して、package.json と package-lock.json の両方が確実にコピーされるようにします。
COPY package*.json ./

# packege.jsonの記述からライブラリをインストール(コンテナ内で実行される)
RUN npm install
# 本番用にコードを作成している場合
# RUN npm install --only=production

# アプリケーションのソースをコンテナ内にコピーする
COPY . .

# 最適なポート番号を入れるらいしい 実際に立ち上げてるポート番号と差異があっても影響なし　
EXPOSE 8080

# containerが立ち上がった時に実行されるコマンド
# CMD [ "npm" , "start" ] 
