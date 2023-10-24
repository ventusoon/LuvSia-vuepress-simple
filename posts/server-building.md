---
title: "从零开始的服务器搭建纪实"
date: 2022-01-19T23:58:22+08:00
author: "Ventus"
tags: ["Server"]
summary: "hello world"
---

***LuvSia***

***Server Building***

<!--more-->

- **目录**
  - [准备工作](#准备工作)
  - [搭建思路](#搭建思路)
  - [开始搭建](#开始搭建)
    - [宝塔面板](#宝塔面板)
    - [X-UI](#x-ui)
    - [Alist](#alist)
    - [Transmission](#transmission)
      - [1.Docker安装](#1docker安装)
      - [2-1.普通安装](#2-1普通安装)
      - [2-2.transmission web control](#2-2transmission-web-control)
    - [Rclone](#rclone)
    - [Live-torrent](#live-torrent)
    - [Cloudflare WARP](#cloudflare-warp)
- [后记](#后记)
- [感谢](#感谢)

## 准备工作

|VPS|Domain||||||
|---|:---:|:----:|:---:|:----:|:---:|:----:|
|[![dmit]](https://www.dmit.io)|example.com|[![nginx]](https://www.nginx.com)|[![mysql]](https://www.mysql.com)|[![php]](https://www.php.net)|[![phpmyadmin]](https://www.phpmyadmin.net)|[![cloudflare]](https://www.cloudflare.com)|

*更新软件源*

```javascript
apt update
```

## 搭建思路

**预留一级域名搭建网站**，**~~给各个应用添加前端网页根路径。~~**

**后因部分应用无法添加`二级目录`（网页根路径），所以这里只能使用添加`二级域名`的思路，区别各个应用。**

**再通过添加`反向代理`，实现分域名访问不同前端应用。**

## 开始搭建

### 宝塔面板

|Work|Web|
|:----:|:---:|
|宝塔面板|[![bt]](https://www.hostcli.com)|

**1.使用一键配置工具。**
一键脚本集成工具

```bash
wget -O box.sh https://raw.githubusercontent.com/BlueSkyXN/SKY-BOX/main/box.sh && chmod +x box.sh && clear && ./box.sh
```

或

```bash
wget -O install.sh http://io.bt.sy/install/install-ubuntu_6.0.sh && bash install.sh
```

**2.安装`nginx-1.21`、`mysql-5.5`、`php-7.4`、`phpmyadmin-5.0`四件套**

**3.添加站点。**
|Work|Domain||
|---|---|:---:|
|alist|a.example.com|**正常**|
|宝塔面板|b.example.com|**正常**|
|Transmission|t.example.com|**正常**|
|X-UI|x.example.com|**正常**|

**4.设置，添加SSL，`强制开启https`。**

**记录`证书路径`，证书可以直接在`宝塔面板`进行更新，或是设置定时任务自动更新;**

**`宝塔面板`申请的证书在如下目录：`/www/server/panel/vhost/cert/你的域名/` 目录之下。**  

***`强制开启https`***。

**5.关闭面板`安全入户`，即删除`二级目录`。**

```java
rm -f /www/server/panel/data/admin_path.pl
```

**6.在`Cloudflare`中解析二级域名`b.example.com`**

**7.添加反向代理到`b.example.com`**

```javascript
代理名称 宝塔面板
目标URL  http://127.0.0.1:8888  发送域名 $host
```

**8.安装`docker`安装器。**

# *`X-UI`*

|Work|Web|Tools|
|---|---|---
|x-ui|[![xui]](https://github.com/vaxilu/x-ui)|[![docker]](https://hub.docker.com/r/enwaiax/x-ui)

**1.镜像源**

```java
enwaiax/x-ui:latest
```

**2.安装运行**

```bash
mkdir x-ui && cd x-ui
docker run -itd --network=host \
    -v $PWD/db/:/etc/x-ui/ \
    -v $PWD/cert/:/root/cert/ \
    --name x-ui --restart=unless-stopped \
    enwaiax/x-ui:latest
```

**3.在`Cloudflare`中解析二级域名`x.example.com`**

**4.添加反向代理到`x.example.com`**

```javascript
代理名称 x-ui
目标URL  http://127.0.0.1:54321  发送域名 $host
```

**5.配置`VMess`协议，开启`ws`，路径`/xiya`。**

**6.开启CDN加速，在`nginx`配置文件中添加如下。**

```javascript
location /xiya {
        proxy_redirect off;
        proxy_pass http://127.0.0.1:22513;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $http_host;
        proxy_read_timeout 300s;
        # Show realip in v2ray access.log
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
```

**7.开启`Cloudflare`小云朵，并优选IP。**

**8.[下载优选IP](https://github.com/XIU2/CloudflareSpeedTest/releases) ，选出优选IP后，客户端如下配置**

```diff
+ 填入优选IP
+ 更改端口为443；
+ host设置x.example.com；
+ 开启tls。
```

**9.Surge配置**

```go
🇭🇰 VMess = vmess, 104.19.79.223, 443, username=2d285385-836d-4b30-f32c-11cdd637aeed, tls=true, tls13=false, ws=true, ws-path=/xiya, sni=example.com, ws-headers=Host:example.com, skip-cert-verify=0, tfo=false, udp-relay=true
```

# *`Alist`*

|Work|Web|Tools|
|---|---|---
|Alist| [![alist]](https://github.com/Xhofe/alist)|[![docker]](https://hub.docker.com/r/xhofe/alist)|

**1.添加镜像源**

```javascript
xhofe/alist:latest
```

**2.不配置容器，使用代码**

```java
docker run -d --restart=always -v /etc/alist:/opt/alist/data -p 5244:5244 --name="alist" xhofe/alist:latest
```

**3.在`Cloudflare`中解析二级域名`a.example.com`**

**4.添加反向代理到a.example.com**

```javascript
代理名称 alist
目标URL  http://127.0.0.1:5244  发送域名 $host
```

# *`Transmission`*

|Work|Web|Tools|
|---|---|---
|Transmission| [![transmission]](https://github.com/helloxz/docker-transmission)|[![docker]](https://hub.docker.com/r/helloz/transmission)|

#### 1.Docker安装

**构建镜像**

```php
# 克隆仓库
git clone https://github.com/helloxz/docker-transmission.git
# 进入仓库目录
cd docker-transmission
# 构建Docker镜像
docker build -t luvsia:transmission
```

**运行镜像**

```javascript
docker run -d --name="transmission" \
  -e USERNAME=ventus \
  -e PASSWORD=ysw554247430 \
  -p 9091:9091 \
  -p 51413:51413 \
  -p 51413:51413/udp \
  -v /GoogleDrive:/Downloads \
  --restart=always \
  luvsia:transmission
```

**/GoogleDrive:本地下载目录为[`Rclone` mount `GoogleDrive`](#Rclone-mount-GoogleDrive)中的谷歌云盘目录，自动下载到谷歌云盘，实现无线网盘**

#### 2-1.普通安装

**安装transmission-daemon**

```javascript
apt-get install transmission-daemon
```

**首先执行一次启动和停止命令，防止配置文件被覆盖**

启动

```javascript
service transmission-daemon start
```

停止

```javascript
service transmission-daemon stop
```

重启

```javascript
service transmission-daemon restart
```

**修改transmission-daemon配置文件**

```java
nano /var/lib/transmission-daemon/info/settings.json
```

```javascript
"rpc-host-whitelist": "*",  //域名白名单，*为允许所有
"rpc-host-whitelist-enabled": false, //是否开启白名单，false为否
"rpc-password": "远程登录密码",
"rpc-port": 9091, //远程登录端口
"rpc-username": "远程帐号",
"rpc-whitelist": "*", //ip白名单
"rpc-whitelist-enabled": false,  //是否开启ip白名单，false为否
```

**执行启动命令**

```javascript
service transmission-daemon start
```

```javascript
systemctl enable transmission-daemon.service
```

#### 2-2.transmission web control

**获取安装脚本**

```javascript
wget https://github.com/ronggang/transmission-web-control/raw/master/release/install-tr-control-cn.sh
```

**执行安装脚本**

```javascript
bash install-tr-control-cn.sh
```

**3.在`Cloudflare`中解析二级域名`t.example.com`**

**4.添加反向代理到t.example.com**

```javascript
代理名称 transmission
目标URL  http://127.0.0.1:9091  发送域名 $host
```

**5.修改默认保存目录`/GoogleDrive`，启用临时目录`/Downloads`，记得给`!权限!`**

```
把`/Downloads`赋予777权限
```

# *`Rclone`*

|Work|Web|Tools|
|---|---|---
|Rclone| [![rclone]](https://github.com/rclone/rclone)|[![googledrive]](https://drive.google.com)|

**1.安装`Rclone`**

```bash
wget https://www.moerats.com/usr/shell/rclone_debian.sh && bash rclone_debian.sh
```

**2.初始化配置**

```javascript
rclone config
```

**3.选择`GoogleDrive`，剩余操作参考[这里](https://www.chenweiliang.com/cwl-1966.html)**

CMD开启代理

```bash
set http_proxy=socks5://127.0.0.1:10808 #端口号为http的socks5实际端口
set https_proxy=socks5://127.0.0.1:10808 #端口号为https的socks5实际端口
```

**4.挂载磁盘**

```javascript
mkdir -p /GoogleDrive
```

```
mkdir -p /Downloads
```
### 确认安装了`FUSE3`

```javascript
apt install fuse3
```

```javascript
rclone mount ventusoon:ventus /GoogleDrive \
 --umask 0000 \
 --default-permissions \
 --allow-non-empty \
 --allow-other \
 --transfers 4 \
 --buffer-size 32M \
 --low-level-retries 200
 --dir-cache-time 12h
 --vfs-read-chunk-size 32M
 --vfs-read-chunk-size-limit 1G
 ```

**5.配置开机自动挂载**

```javascript
cat > /etc/systemd/system/rclone.service <<EOF
[Unit]
Description=Rclone
AssertPathIsDirectory=LocalFolder
After=network-online.target
[Service]
Type=simple
ExecStart=/usr/bin/rclone mount ventusoon:ventus /GoogleDrive \
 --umask 0000 \
 --default-permissions \
 --allow-non-empty \
 --allow-other \
 --buffer-size 32M \
 --dir-cache-time 12h \
 --vfs-read-chunk-size 64M \
 --vfs-read-chunk-size-limit 1G
ExecStop=/bin/fusermount -u LocalFolder
Restart=on-abort
User=root
[Install]
WantedBy=default.target
EOF
```

**挂载成功后，输入`df -h`命令即可看到挂载的磁盘**

**6.常用命令**

```javascript
systemctl start rclone
```

```javascript
systemctl enable rclone
```

```javascript
systemctl stop rclone
```

```javascript
systemctl status rclone
```

**7.`Transmission`添加`rlone`挂载在`GoogleDrive`上的路径**

```go
/GoogleDrive
```

# *`Live-torrent`*

|Work|Web|Tools|
|---|---|---
|live-torrent| [![live-torrent]](https://github.com/Davenchy/live-torrent)|[![docker]](https://hub.docker.com/r/helloz/transmission)|

**1.镜像源**

```javascript
davenchy/live-torrent
```

**2.安装运行**

```javascript
docker run --restart=always --name live-torrent -d -p 8080:8080 davenchy/live-torrent
```

**3.在`Cloudflare`中解析二级域名`live.example.com`**

**4.添加反向代理到`live.example.com`**

```javascript
代理名称 Live-torrent
目标URL  http://127.0.0.1:8080  发送域名 $host
```

# *`Cloudflare WARP`*

|Work|Web|Use|
|---|---|---
|Cloudflare WARP|[![cloudflare]](https://github.com/P3TERX/warp.sh)|[使用教程](https://p3terx.com/archives/cloudflare-warp-configuration-script.html)|

**功能菜单**

```javascript
bash <(curl -fsSL git.io/warp.sh) menu
```

**`WARP WireGuard` 双栈全局网络**

```javascript
bash <(curl -fsSL git.io/warp.sh) d
```

**`IPv4` 网络**

```javascript
bash <(curl -fsSL git.io/warp.sh) 4
```

**`IPv6` 网络**

```javascript
bash <(curl -fsSL git.io/warp.sh) 6
```

**`WARP 官方客户端` `SOCKS5` 代理**

```javascript
bash <(curl -fsSL git.io/warp.sh) s5
```

## 后记

## 感谢

[@guodongxiaren](https://github.com/guodongxiaren/README)  
[@HostCLi](https://www.hostcli.com)  
[@jinwyp](https://github.com/jinwyp/one_click_script)  
[@Xhofe](https://github.com/Xhofe/alist)  
[@vaxilu](https://github.com/vaxilu/x-ui)  
[@enwaiax](https://hub.docker.com/r/enwaiax/x-ui)  
[@XIU2](https://github.com/XIU2/CloudflareSpeedTest)  
[@helloxz](https://github.com/helloxz/docker-transmission)  
[@moerats](https://www.moerats.com/archives/491)  
[@P3TERX](https://github.com/P3TERX/warp.sh)

---------------------------

[alist]:/images/server-building/alist.png "alist"
[bt]:/images/server-building/bt.png "宝塔面板"
[cloudflare]:/images/server-building/cloudflare.png ""
[dmit]:/images/server-building/dmit.png ""
[docker]:/images/server-building/docker.png ""
[googledrive]:/images/server-building/googledrive.png ""
[live-torrent]:/images/server-building/live-torrent.png ""
[mysql]:/images/server-building/mysql.png "mysql"
[nginx]:/images/server-building/nginx.png "nginx"
[php]:/images/server-building/php.png "php"
[phpmyadmin]:/images/server-building/phpmyadmin.png "phpmyadmin"
[rclone]:/images/server-building/rclone.png "rclone"
[transmission]:/images/server-building/transmission.png "transmission"
[xui]:/images/server-building/xui.png "xui"
