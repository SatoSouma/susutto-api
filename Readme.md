# タスク管理アプリの API

### /create
task作成

### /getTask
部署ごとのtask取得

### /putCharge
task担当者更新

## 概要

# Docker 起動方法メモ

## Dockerfile

### image 作成

```bash
docker image build . -t myapp:v1
```

> **_-t_** はタグ付けオプション 同じタグ名で build すると image を更新できる

### image 一覧

```bash
docker image ls
```

### image 削除

```bash
docker image rm
```

### コンテナ作成

```bash
docker container run -p 80:80 -d myapp:v1
```

> - **_-d_** はデタッチモード(バックグラウンド)で実行 -p でポート番号を指定 <ホストのポート>:<コンテナのポート>
> - <コンテナのポート>が express で指定しているポート番号と同一でなければならない Dockerfile の EXPOSE も明示的に指定する
> - <ホストのポート>実際にアクセスするポート番号はこれになる

### コンテナ一覧表示

```bash
docker container ls
```

### コンテナ内に入る

```bash
docker container exec -it <コンテナ ID> /bin/sh
```

### コンテナの停止

```bash
docker container stop <コンテナ ID>
```

## docker-compose.yml

### image をビルドして docker-compose 内に記述してある内容でコンテナを立ち上げ

```bash
docker-compose up
```

> **_-d_** でバックグラウンドで立ち上げ

### docker-compose 内に記述してあるコンテナの停止

```bash
docker-compose down
```
