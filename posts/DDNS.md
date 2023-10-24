---
title: "Cloudflare + DDNS-GO + RDP"
date: 2023-03-27T21:22:22+08:00
author: "Ventus"
tags: ["DDNS","network"]
summary: "***记录使用ddns实现内网穿透远程访问内网设备***"
---

### *Using DDNS and Port forwarding to achieve remote access to devices on an internal network*

# 前言

* **最近迷上了AI画图软件 *`stable-diffusion-webui`* ，由于它对 *`GPU`* 的依赖很大，我只能使用家里的电脑来炼丹（也就一张6年前的1060:disappointed_relieved:），奈何又在外地上班，只能走进了我一直望而却步的动态域名解析服务，来实现远程控制家中电脑，以及其他网络设备的目的。**

    ![Z](/images/DDNS/Z.jpg ":smirk:")
    ![D](/images/DDNS/B.jpg ":smirk:")
    ![B](/images/DDNS/0.jpg ":smirk:")
* **写本篇教程（备忘录），一是彰显成就感，二是带给大家一些思路，让有相同需求的朋友少走弯路（毕竟我找了很多教程都没有说清楚DDNS到底是个什么，又要怎么使用）。**

* [*DDNS*](https://baike.baidu.com/item/ddns/670146)（全名：*Dynamic Domain Name Server*），动态域名服务，说人话就是将家中内网的动态 `ipv4` 地址映射到一个固定的域名解析服务上。

* [*Cloudflare*](https://www.cloudflare.com/) 全球知名的DNS服务商。

* [*DDNS-GO*](https://github.com/jeessy2/ddns-go) 超好用的DDNS解析服务工具。感谢作者大大解决了我最关键的问题。

* [公网 *IP*](https://baike.baidu.com/item/%E5%85%AC%E7%BD%91IP) 不得不说电信的服务水平，半天时间真就给我开通了，这里就不说这玩意儿怎么用了，接触网络的人基本都知道，虽然现在有很多办法可以绕过公网 *`IP`* 来访问内网，但是通过我的测试，用了很多的远程连接服务和内网穿透工具，还是最原始的办法性价比更高，体验更是一流。

     ![RDP](/images/DDNS/1.png "可以看到这里的延迟十分之低")

## 开工

* **开始之前先简单说下我家里的网络布局，弱电箱一个光猫桥接模式，一个主路由负责拨号，卧室一个 *`K2P`* 路由 *`ap`* 模式，一个旧笔记本电脑充当软路由（旁路由），安装了 *`PVE`* ，*`PVE`* 上使用了 *`openWRT`*，还有一台台式电脑，忘了在 *`visio`* 上画出来。**

    ![网络布局](/images/DDNS/2.png "网络布局图")

* 不要问我为什么不在 *`openWRT`* 上 *`DHCP`* ，我试了很多次都无法联网，可能是因为网口绑定了 *`MAC`* 地址，我也不知道怎么取消绑定，所以我只能在主路由上绑定我电脑的 *`MAC`* 才能上网。（可能也不是这个原因，我在 *`openWRT`* 上绑定 *`WAN`* 口地址也不能上网。）**我家的网络环境真的太复杂了:disappointed_relieved:**

## 正式开始

* **下载[*`DDNS-GO`*](https://github.com/jeessy2/ddns-go/releases)到本地并解压，使用管理员权限CD到根目录**


安装

```bash
.\ddns-go.exe -s install
```

卸载

```bash
.\ddns-go.exe -s uninstall
```

   ![DDNS-GO](/images/DDNS/3.png "DDNS-GO")

* **安装好后，在服务中可以看到 *`ddns-go`* 服务，并设置自启动**

    ![DDNS-GO服务](/images/DDNS/4.png "DDNS-GO服务开启")
* **打开 [*`http://127.0.0.1:9876`*](http://127.0.0.1:9876)，可以看到 *`ddns-go`* 支持很多家动态解析服务商**

    ![DDNS-GO配置1](/images/DDNS/5.png "DDNS-GO页面")
* **去 *`cloudflare`* 获取 *`API`* 令牌既上图中的 *`Token`* ，重点注意区域资源要选所有区域**

    ![cloudflare配置1](/images/DDNS/6.png "cloudflare配置")
    ![cloudflare配置2](/images/DDNS/7.png "一定要选所有区域")
* **回到 *`DDNS-GO`* 中如下图，像我一样配置即可，有公网的只勾选 *`IPv4`* ，没有公网的选 *`IPv6`* （我两个都有，所以都选了，你也可以，经测试无伤大雅），在主机名后面填上你的`域名`。至于如何获得 *`IPv6`* ，这个我下次再做一个详细的教程。（推荐一个好用的[CF国内API](https://cf-ns.com/cdn-cgi/trace)，可以准确获取你的 *`IP`* 本地地址，无论你是否使用科学上网工具）**

    ![DDNS-GO配置2](/images/DDNS/8.png "IPv4")
    ![DDNS-GO配置3](/images/DDNS/9.png "IPv6")
    ![DDNS-GO配置4](/images/DDNS/10.png "选择是否外网连接，以及设置访问账号密码")
* **点击保存后，成功后，你会在 *Cloudflare* 上你的域名 *`dns`* 服务中看到你已经解析了的A记录（IPv4地址）或者AAAA记录（IPv6地址），*`ddns-go`* 中你也可以看到解析成功的提示**

* **到此，你终于成功解析你的动态IP，在主路由、旁路由上设置好端口转发服务，就可以随时随地访问家中的设备。**

## 抽时间，再把如何有效的进行端口转发记录下来，以防我这个狗脑子又忘了
