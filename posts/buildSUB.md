---
title: "搭建属于自己的订阅转换链接"
date: 2023-02-07T17:30:00+08:00
author: "Ventus"
tags: ["Server"]
cover: "/images/1993/titties_circle.png"
summary: "***CLASH订阅转换搭建实战***"
---

# [Sub-Web-Modify前端搭建](https://github.com/youshandefeiyang/sub-web-modify)

[本项目](https://sub.luvsia.com)基于[CareyWang/sub-web](https://github.com/CareyWang/sub-web)，重制CSS样式，解决大部分布局细节问题，增加“暗黑模式”，默认自动切换亮/暗模式（点击“太阳/月亮”图标可手动切换），增加“高级功能”点击显示/隐藏，添加短链接选择/自定义功能，增加近百条远程配置，新增[sub-web聚合API](https://github.com/youshandefeiyang/sub-web-api)，增加上传自定义远程配置/JS进阶排序节点/JS进阶筛选节点等功能！

## 更新系统并安装 Node 与 Yarn

依次运行下面四行代码，若是 CentOS 系统，请自行替换下面前两行命令中的 **`apt`** 为 **`yum`**

```JavaScript
apt update -y
apt install -y curl wget sudo nodejs git
apt install npm
npm install -g yarn
```

命令执行完毕以后，请运行下面的代码查询 Node 与 Yarn 是否安装成功，若是成功会返回版本号。

```JavaScript
node -v
yarn --version
```

## 下载并安装 sub-web-modify

拉取 **`sub-web-modify`** 程序，并进入 **`sub-web-modify`** 文件夹

```JavaScript
git clone https://github.com/youshandefeiyang/sub-web-modify.git
cd sub-web-modify
```

在项目目录中安装构建依赖项，构建的过程稍微有点长

```JavaScript
yarn install
```

使用 webpack 运行 Web 客户端以进行本地开发。

```JavaScript
yarn serve
```

出现下图则表示前端调试模式启动成功

![yarn-success](https://raw.githubusercontent.com/ventusoon/LuvSia/gh-pages/images/buildSUB/yarn-success.png)

#### 这时，我们浏览器访问 <http://服务器ip:8080/> 应该可以进行前端 sub-web-modify 的预览了

#### *记住8082端口的防火墙和安全组要开放*

## 修改默认后端地址并增加远程规则

找到 VPS /root/sub-web-modify/src/views/Subconverter.vue 文件用编辑器打开

找到 backendOptions:将你解析好的后端地址输入进去。域名为你刚才准备的后端域名，要将http改成https，并且增加/sub?的后缀。（这样选项下面就会出现自己的后端地址）

如果不想用后端作者默认提供的转换那可以把 const defaultBackend = 也改成你自己的域名记得加上 ""。

找到 remoteConfig: [ 后回车将喜欢的规则复制进去即可。

## 配置完毕后打包网站

配置完毕以后，程序会自动更新，再次刷新前端网页，会出现刚才添加的相关规则。

经过上面的修改默认后端地址和原程配置的规则就修改好了。

至此，我们的前端调试完毕，我们现在需要打包，生成一个发布目录并将他发布了。

首先停止调试程序，CTRL+C ，退出当前调试，然后执行下面的命令进行打包：

```JavaScript
yarn build
```

执行以下打包命令，在 /root/sub-web-modify 下面会生成一个 dist 目录，这个目录即为网页的发布目录。

将这个目录的里面的文件复制到你站点的根目录即可。

## 一键搭建前端

```JavaScript
cd /root && git clone https://github.com/youshandefeiyang/sub-web-modify.git && chmod -R 755 sub-web-modify && cd sub-web-modify && yarn install && yarn build
```

## 发布前端

没有安装宝塔的去宝塔官网看教程安装.

在宝塔面板中点击增加站点分别将前端站点增加上去，并配置好ssl证书。

将 /root/sub-web/dist文件夹内的所有文件复制到前端站点的根目录下即可。

访问该网站，前端就部署好了。

# [SubConverter后端搭建](https://github.com/tindy2013/subconverter)

## 新建后端站点并进行反向代理

在宝塔面板中新建后端的站点，同样配置好ssl并将设置站点的反向代理到25500。

点击新建好的后端网站的网站名在弹出来的消息盒子中点击反向代理添加发现代理。

反向代理配置方法方法如图：

![反代](https://raw.githubusercontent.com/ventusoon/LuvSia/gh-pages/images/buildSUB/buildSUB.png)

设置完毕后我们开始安装后端

## 搭建后端程序

### 这里我们可以用两种方法搭建后端程序，第一种是用二进制文件搭建，第二种为使用Docker搭建。我个人比较推荐Docker配置简单一行命令即可搞定

#### 方法一 二进制文件搭建

##### 下载并解压 subconverter 二进制文件

```JavaScript
cd /root
wget https://github.com/tindy2013/subconverter/releases/download/v0.7.2/subconverter_linux64.tar.gz
tar -zxvf subconverter_linux64.tar.gz
```

### *完成以后，在 /root 文件夹下会多出一个 subconverter 的文件夹，这个就是我们的后端程序*

##### 修改配置文件参数

现在我们需要修改后端配置文件中的一些参数

找到VPS文件 /root/subconverter/pref.ini ，找到如下参数进行修改

```JavaScript
api_access_token=123123dfsdsdfsdfsdf            #随意设置自己知道就行
managed_config_prefix=https://sub.yourdomin.com  #设置成我们刚刚解析的后端域名
listen=127.0.0.1                                #这里改成 127.0.0.1 进行反代
```

##### 创建服务进程并启动

接下来我们需要创建一个服务，让VPS每次重启或是开机自动运行后端程序

找到VPS目录 /etc/systemd/system，创建一个名为 sub.service 的文件

打开文件，贴入以下内容，保存。

```JavaScript
[Unit]
Description=A API For Subscription Convert
After=network.target
 
[Service]
Type=simple
ExecStart=/root/subconverter/subconverter
WorkingDirectory=/root/subconverter
Restart=always
RestartSec=10
 
[Install]
WantedBy=multi-user.target
```

##### 检查运行状态以及设置开机自启

```JavaScript
systemctl daemon-reload
systemctl start sub
systemctl enable sub
systemctl status sub
```

### *到这里，后端也就搭建完毕了，我们现在可以在浏览器里面访问我们的后端了，访问后端域名后端搭建成功！*

#### 方法二 Docker容器搭建
如果服务器安装了Docker可以使用命令：

```JavaScript
docker run -d --restart=always -p 25500:25500 tindy2013/subconverter:latest
```

然后再用下面的命令确认一下状态

```JavaScript
curl http://localhost:25500/version
curl http://localhost:25500/version
```

如果输出当前 subconverter 容器版本几位搭建成功。
