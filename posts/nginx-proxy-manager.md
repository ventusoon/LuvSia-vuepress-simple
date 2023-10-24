---
title: "用Nginx Proxy Manager部署静态网页"
date: 2023-04-10T01:45:48+08:00
author: "Ventus"
tags: ["blog", "server"]
summary: "***Nginx Proxy Manager***"
---

> ***Deploying Static Web Pages with Nginx Proxy Manager***

* 搭建的 *web* 服务因使用了 ***~~宝塔面板~~*** 抽风不能 *CDN* ，导致访问失败，一气之下重装了系统，重新搭建了所有 *web*，并使用 *Nginx Proxy Manager* 管理 *web* 服务。

* 某些 *web* 服务需要在 *Nginx Proxy Manager* 的目录下构建，故在此记录下部署静态网页的流程备忘。

## 搭建步骤

### 一、安装 *Docker* 及 *Docker-compose*

* 安装 *Docker*

```bash
#更新、安装必备软件

apt-get update && apt-get install -y wget nano

#安装docker：

curl -sSL https://get.docker.com/ | sh


#开机自动启动

systemctl start docker

systemctl enable docker
```

* 安装 *Docker-compose*

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/v2.22.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### 二、安装 [*Nginx Proxy Manager* 中文版](https://github.com/xiaoxinpro/nginx-proxy-manager-zh?utm_source=nginx-proxy-manager-zh)

* 创建目录

```bash
mkdir -p /data/docker_data/npm
cd /data/docker_data/npm
```

* 创建 *docker-compose.yml* 文件

```bash
nano docker-compose.yml
```

* 在文件中填入以下内容，然后 *Ctrl+X* 保存，按 *Y* 退出

```bash
version: '3'
services:
  app:
    image: 'chishin/nginx-proxy-manager-zh:latest'
    restart: always
    ports:
      - '80:80'
      - '81:81'
      - '443:443'
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
```

* 创建完成后，运行

```bash
docker-compose up -d
```

* 然后就可以通过 IP:81 来访问 *Nginx Proxy Manager* ，用初始账号密码登陆并修改。

```bash
Email:     admin@example.com
Password:  changeme
```

* 反代  *Nginx Proxy Manager*，并添加 *SSL*。

<details>
<summary>
View Screenshots
</summary>

![1](/images/nginx-proxy-manager/1.png "反代 Nginx Proxy Manager")
![2](/images/nginx-proxy-manager/2.png "添加 SSL ")

</details>

### 三、创建静态网站目录，添加内容并反代

* 在挂载的 *data* 文件夹里面创建一个新的网站文件夹

```bash
mkdir -p /data/docker_data/npm/data/sub.ven2s.cn
```

* 将带有html文件的内容放到这个文件夹里面

```bash
# 将/sub-web-modify/dist/文件夹下的所用文件移动到/data/docker_data/npm/data/sub.ven2s.cn/下
mv ~/sub-web-modify/dist/* /data/docker_data/npm/data/sub.ven2s.cn/
```

* 反代 *sub.ven2s.cn* 加 *SSL*，并修改配置文件

    ![3](/images/nginx-proxy-manager/3.png "修改配置文件")

```bash
location / {
    root /data/sub.ven2s.cn;
    index index.html index.htm;
    error_page 404 /index.html;
}
```

## 大功告成