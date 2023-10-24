---
title: "Wonderful ChatGPT"
date: 2023-03-19T03:22:22+08:00
author: "Ventus"
tags: ["ChatGPT"]
summary: "***3 Steps Build your own ChatGPT Web***"
---

***3 Steps Build Your Own ChatGPT Web***

* [*ChatGPT*](https://baike.baidu.com/item/ChatGPT/62446358?fr=aladdin)（全名：*Chat Generative Pre-trained Transformer*），美国OpenAI研发的聊天机器人程序，于2022年11月30日发布。

* ChatGPT是人工智能技术驱动的自然语言处理工具，它能够通过理解和学习人类的语言来进行对话，还能根据聊天的上下文进行互动，真正像人类一样来聊天交流，甚至能完成撰写邮件、视频脚本、文案、翻译、代码，写论文等任务。

# [*ChatGPT-Web*](https://github.com/ventusoon/chatgpt-web)

* 支持双模型，提供了两种非官方 `ChatGPT API` 方法

## 介绍

| 方式                                          | 免费？ | 可靠性     | 质量 |
| --------------------------------------------- | ------ | ---------- | ---- |
| `ChatGPTAPI(gpt-3.5-turbo-0301)`                           | 否     | 可靠       | 相对较笨 |
| `ChatGPTUnofficialProxyAPI(网页 accessToken)` | 是     | 相对不可靠 | 聪明 |

* 对比：

1. [*ChatGPTAPI(gpt-3.5-turbo-0301)*](https://platform.openai.com/ "API获取") 使用 *gpt-3.5-turbo-0301* 通过官方 *OpenAI* 补全 *API* 模拟 *ChatGPT* （最稳健的方法，但它不是免费的，并且没有使用针对聊天进行微调的模型）
2. [*ChatGPTUnofficialProxyAPI*](https://chat.openai.com/api/auth/session "AccessToken获取") 使用非官方代理服务器访问 *ChatGPT* 的后端 *API*，绕过 *Cloudflare*（使用真实的的 *ChatGPT*，非常轻量级，但依赖于第三方服务器，并且有速率限制）

## 感谢原作者*Chanzhaoyu*的辛苦付出

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
sudo curl -L "https://github.com/docker/compose/releases/download/v2.17.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### 二、安装 *ChatGPT-Web*

* 创建目录

```bash
mkdir -p /data/docker_data/chatgpt
cd /data/docker_data/chatgpt
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
    image: luvsia/chatgpt-web # 总是使用 latest ,更新时重新 pull 该 tag 镜像即可
    ports:
      - 3002:3002
    environment:
      # 二选一
      OPENAI_API_KEY: 
      # 二选一
      OPENAI_ACCESS_TOKEN: 
      # API接口地址，可选，设置 OPENAI_API_KEY 时可用
      OPENAI_API_BASE_URL:
      # API模型，可选，设置 OPENAI_API_KEY 时可用
      OPENAI_API_MODEL:
      # 反向代理，可选
      API_REVERSE_PROXY:
      # 访问权限密钥，可选
      AUTH_SECRET_KEY:
      # 超时，单位毫秒，可选
      TIMEOUT_MS: 100000
      # Socks代理，可选，和 SOCKS_PROXY_PORT 一起时生效
      SOCKS_PROXY_HOST:
      # Socks代理端口，可选，和 SOCKS_PROXY_HOST 一起时生效
      SOCKS_PROXY_PORT:

```

* 创建完成后，运行

```bash
docker-compose up -d
```

* 然后就可以通过 IP:3002 来访问 *ChatGPT*

### 三、反代 *ChatGPT* 并使用打字机效果

* 宝塔面板中新建网站chat.example.com并注册证书、开启HTTPS

![ChatGPT](/images/ChatGPT/1.png "ChatGPT")

* 反向代理

![ChatGPT](/images/ChatGPT/2.png "ChatGPT")

* 修改反向代理配置文件，实现打字机效果

```bash
#设置反向代理参数以支持流式输出
proxy_buffering off;
chunked_transfer_encoding on;
tcp_nopush on;
tcp_nodelay on;
keepalive_timeout 65;
```

![ChatGPT](/images/ChatGPT/3.png "ChatGPT")

# 大功告成，*Enjoy*