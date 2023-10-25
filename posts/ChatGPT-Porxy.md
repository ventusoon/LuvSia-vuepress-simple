---
title: "ChatGPT-Porxy"
date: 2023-04-20T18:43:00+08:00
author: "ventus"
tags: ["chatgpt"]
summary: "***自建ChatGPT反向代理***"
---

> ***Build ChatGPT Reverse Proxy***

* *ChatGPT-Web* 项目的免费代理挂了，故此，选择本项目 [![](https://img.shields.io/badge/github-go--chatgpt--api-pink)](https://github.com/linweiyuan/go-chatgpt-api) 来解决代理问题。

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

### 二、安装 [*go-chatgpt-api* ](https://github.com/linweiyuan/go-chatgpt-api)

* 创建目录

```bash
mkdir -p /data/docker_data/go-chatgpt-api
cd /data/docker_data/go-chatgpt-api
```

* 创建 *docker-compose.yml* 文件

```bash
nano docker-compose.yml
```

* 在文件中填入以下内容，然后 *Ctrl+X* 保存，按 *Y* 退出

```bash
version: "3"
services:
  go-chatgpt-api:
    container_name: go-chatgpt-api
    image: linweiyuan/go-chatgpt-api
    ports:
      - 8080:8080  # 容器端口映射到宿主机8080端口；宿主机监听端口可按需改为其它端口
    environment:
      - GIN_MODE=release
      - CHATGPT_PROXY_SERVER=http://chatgpt-proxy-server:9515
      #- NETWORK_PROXY_SERVER=http://host:port     # NETWORK_PROXY_SERVER：科学上网代理地址，例如：http://10.0.5.10:7890
      #- NETWORK_PROXY_SERVER=socks5://host:port   # NETWORK_PROXY_SERVER：科学上网代理地址
    depends_on:
      - chatgpt-proxy-server
    restart: unless-stopped

  chatgpt-proxy-server:
    container_name: chatgpt-proxy-server
    image: linweiyuan/chatgpt-proxy-server
    restart: unless-stopped
```

* 创建完成后，运行

```bash
docker-compose up -d
```
* 检查运行的容器；确保容器状态为UP

```bash
docker ps
```

* 检测容器映射到宿主机的监听端口是否监听

```bash
ss -tnlp|grep 8080
```

### 三、使用自建反代

* 使用access token模式，并使用我们自建的代理地址进行访问；自建IP的访问地址为 *http://ip:8080/conversation* ；如果不想让 *ip* 暴露，可以用 *nginx* 再反代 *ip* +端口， *https://example.com/conversation* 。

```bash
# 反向代理，可选
    API_REVERSE_PROXY: https://example.com/conversation
```

* 现在我们访问chatgpt-web，查看是否可以正常使用，注意确保 *chatgpt-proxy-server* 运行正常， *go-chatgpt-api* 需要初始化启动需要耐心等待

```bash
# 查看容器日志是否运行正常
docker logs -f chatgpt-proxy-server
docker logs -f go-chatgpt-api
```
## 完工

  ![1](/images/ChatGPT-Porxy/1.png ":smirk:")

## 本教程来源：[![](https://img.shields.io/badge/github-dqzboy/ChatGPT--Porxy-lemonchiffon)](https://github.com/dqzboy/ChatGPT-Porxy)
