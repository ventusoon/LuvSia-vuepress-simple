---
title: "KMS 服务端安装部署教程"
date: 2023-05-06T14:19:10+08:00
author: "Ventus"
tags: ["kms", "tools"]
summary: "***KMS Server Installation and Deployment Tutorial***"
---

> ***KMS Server Installation and Deployment Tutorial***

## 关于脚本

* *KMS* 服务安装完成后会加入开机自启动。
* 默认记录日志，其日志位于 /var/log/vlmcsd.log。

## 开始部署

* 使用 *root* 用户登录，运行以下命令：

```bash
wget --no-check-certificate https://github.com/teddysun/across/raw/master/kms.sh && chmod +x kms.sh && ./kms.sh
```

* 安装完成后，输入以下命令查看端口号 1688 的监听情况

```bash
netstat -nxtlp | grep 1688
```

* 返回值类似于如下这样就表示 *OK* 了：

```bash
tcp    0    0 0.0.0.0:1688   0.0.0.0:*   LISTEN   3200/vlmcsd         
tcp    0    0 :::1688        :::*        LISTEN   3200/vlmcsd 
```

* 本脚本安装完成后，会将 *KMS* 服务加入开机自启动。

## 其他命令

```bash
启动：/etc/init.d/kms start
停止：/etc/init.d/kms stop
重启：/etc/init.d/kms restart
状态：/etc/init.d/kms status
```

## 卸载方法

```bash
./kms.sh uninstall
```

## 激活步骤

* 使用管理员权限运行 *cmd* 查看系统版本，命令如下：

```bash
wmic os get caption
```

* 使用管理员权限运行 cmd 安装从上面列表得到的 key，命令如下：

```bash
slmgr /ipk xxxxx-xxxxx-xxxxx-xxxxx-xxxxx
```

* 使用管理员权限运行 cmd 将 KMS 服务器地址设置为你自己的 IP 或 域名，后面最好再加上端口号（:1688），命令如下：

```bash
slmgr /skms Your IP or Domain:1688
```

* 注意：本脚本所做的工作就是此步骤。当你的 KMS 服务出于启动状态，那么此处就可以设置为你自己的 KMS 服务器地址。
使用管理员权限运行 cmd 手动激活系统，命令如下：

```bash
slmgr /ato
```

* 关于 Office 的激活，要求必须是 VOL 版本，否则无法激活。
找到你的 Office 安装目录，32 位默认一般为 C:\Program Files (x86)\Microsoft Office\Office16
64 位默认一般为 C:\Program Files\Microsoft Office\Office16
Office16 是 Office 2016，Office15 就是 Office 2013，Office14 就是 Office 2010。
打开以上所说的目录，应该有个 OSPP.VBS 文件。
使用管理员权限运行 cmd 进入 Office 目录，命令如下：

```bash
cd "C:\Program Files (x86)\Microsoft Office\Office16"
```

* 使用管理员权限运行 cmd 注册 KMS 服务器地址：

```bash
cscript ospp.vbs /sethst:Your IP or Domain
```

* 使用管理员权限运行 cmd 手动激活 Office，命令如下：

```bash
cscript ospp.vbs /act
```
### 主要步骤

1. 设置服务 `slmgr -skms Your IP or Domain`
2. 安装密钥 `slmgr -ipk 版本对应秘钥`
3. 激活系统 `slmgr -ato`

### 可用服务
- `Your IP or Domain` 维护 **CNAME** 指向有效的服务

+ `telnet Your IP or Domain 1688` 测试服务是否可用
+ `tcping Your IP or Domain 1688`

### 密钥 

<https://learn.microsoft.com/zh-cn/windows-server/get-started/kms-client-activation-keys>

[kms-client-activation-keys.md](https://github.com/MicrosoftDocs/windowsserverdocs/blob/main/WindowsServerDocs/get-started/kms-client-activation-keys.md)

### Windows Server（LTSC 版本）

#### Windows Server 2022

操作系统版本 | KMS 客户端安装密钥
--- | ---
Windows Server 2022 Datacenter | WX4NM-KYWYW-QJJR4-XV3QB-6VM33
Windows Server 2022 Datacenter Azure Edition | NTBV8-9K7Q8-V27C6-M2BTV-KHMXV
Windows Server 2022 Standard   | VDYBN-27WPP-V4HQT-9VMD4-VMK7H

#### Windows Server 2019

操作系统版本 | KMS 客户端安装密钥
--- | ---
Windows Server 2019 Datacenter | WMDGN-G9PQG-XVVXX-R3X43-63DFG
Windows Server 2019 Standard   | N69G4-B89J2-4G8F4-WWYCC-J464C
Windows Server 2019 Essentials | WVDHN-86M7X-466P6-VHXV7-YY726

#### Windows Server 2016

操作系统版本 | KMS 客户端安装密钥
--- | ---
Windows Server 2016 Datacenter | CB7KF-BWN84-R7R2Y-793K2-8XDDG
Windows Server 2016 Standard   | WC2BQ-8NRM3-FDDYY-2BFGV-KHKQY
Windows Server 2016 Essentials | JCKRF-N37P4-C2D82-9YXRT-4M63B

### Windows Server (半年频道版本)

#### Windows Server 版本 20H2、2004、1909、1903 和 1809

操作系统版本 | KMS 客户端安装密钥
--- | ---
Windows Server Datacenter | 6NMRW-2C8FM-D24W7-TQWMY-CWH2D
Windows Server Standard   | N2KJX-J94YW-TQVFB-DG9YT-724CC

### Windows 11 和 Windows 10 (半年频道版本)

操作系统版本 | KMS 客户端安装密钥
--- | ---
Windows 10/11 专业版 | W269N-WFGWX-YVC9B-4J6C9-T83GX
Windows 10/11 专业版 N	 | MH37W-N47XK-V7XM9-C7227-GCQG9
Windows 10/11 专业工作站 | NRG8B-VKK3Q-CXVCJ-9G2XF-6Q84J
Windows 10/11 专业工作站 N	 | 9FNHH-K3HBT-3W4TD-6383H-6XYWF
Windows 10/11 专业教育版 | 6TP4R-GNPTD-KYYHQ-7B7DP-J447Y
Windows 10/11 专业教育版 N | YVWGF-BXNMC-HTQYQ-CPQ99-66QFC
Windows 10/11 教育版 | NW6C2-QMPVW-D7KKK-3GKT6-VCFB2
Windows 10/11 教育版 N | 2WH4N-8QGBV-H22JP-CT43Q-MDWWJ
Windows 10/11 企业版 | NPPR9-FWDCX-D2C8J-H872K-2YT43
Windows 10/11 企业版 N | DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4
Windows 10/11 企业版 G | YYVX9-NTFWV-6MDM3-9PT4T-4M68B
Windows 10/11 企业版 G N | 44RPN-FTY23-9VTTB-MP9BX-T84FV

### Windows 10 (LTSC/LTSB 版本)

#### Windows 10 LTSC 2019

操作系统版本 | KMS 客户端安装密钥
--- | ---
Windows 10 企业版 LTSC 2019   | M7XTQ-FN8P6-TTKYV-9D4CC-J462D
Windows 10 企业版 N LTSC 2019 | 92NFX-8DJQP-P6BBQ-THF9C-7CG2H

#### Windows 10 LTSB 2016

操作系统版本 | KMS 客户端安装密钥
--- | ---
Windows 10 企业版 LTSB 2016   | DCPHK-NFMTC-H88MJ-PFHPY-QJ4BJ
Windows 10 企业版 N LTSB 2016 | QFFDN-GRT3P-VKWWX-X7T3R-8B639

#### Windows 10 LTSB 2015

操作系统版本 | KMS 客户端安装密钥
--- | ---
Windows 10 企业版 2015 LTSB   | WNMTR-4C88C-JK8YV-HQ7T2-76DF9
Windows 10 企业版 2015 LTSB N | 2F77B-TNFGY-69QQF-B8YKP-D69TJ

### 早期版本的 Windows Server

#### Windows Server 版本 1803

操作系统版本 | KMS 客户端安装密钥
--- | ---
Windows Server Datacenter | 2HXDN-KRXHB-GPYC7-YCKFJ-7FVDG
Windows Server Standard   | PTXN8-JFHJM-4WC78-MPCBR-9W4KR

#### Windows Server 版本 1709

操作系统版本 | KMS 客户端安装密钥
--- | ---
Windows Server Datacenter | 6Y6KB-N82V8-D8CQV-23MJW-BWTG6
Windows Server Standard   | DPCNP-XQFKJ-BJF7R-FRC8D-GF6G4

#### Windows Server 2012 R2

操作系统版本 | KMS 客户端安装密钥
--- | ---
Windows Server 2012 R2 Server Standard | D2N9P-3P6X9-2R39C-7RTCD-MDVJX
WindowsServer 2012 R2 Datacenter | W3GGN-FT8W3-Y4M27-J84CP-Q3VJ9
WindowsServer 2012 R2 Essentials | KNC87-3J2TX-XB4WP-VCPJV-M4FWM

#### Windows Server 2012

操作系统版本 | KMS 客户端安装密钥
--- | ---
Windows Server 2012 | BN3D2-R7TKB-3YPBD-8DRP2-27GG4
Windows Server 2012 N | 8N2M2-HWPGY-7PGT9-HGDD8-GVGGY
Windows Server 2012 单语言版 | 2WN2H-YGCQR-KFX6K-CD6TF-84YXQ
Windows Server 2012 特定国家/地区版 | 4K36P-JN4VD-GDC6V-KDT89-DYFKP
Windows Server 2012 Server Standard | XC9B7-NBPP2-83J2H-RHMBY-92BT4
Windows Server 2012 MultiPoint Standard | HM7DN-YVMH3-46JC3-XYTG7-CYQJJ
Windows Server 2012 MultiPoint Premium | XNH6W-2V9GX-RGJ4K-Y8X6F-QGJ2G
Windows Server 2012 Datacenter | 48HP8-DN98B-MYWDG-T2DCC-8W83P

#### Windows Server 2008 R2

操作系统版本 | KMS 客户端安装密钥
--- | ---
Windows Server 2008 R2 Web 版 | 6TPJF-RBVHG-WBW2R-86QPH-6RTM4
Windows Server 2008 R2 HPC 版 | TT8MH-CG224-D3D7Q-498W2-9QCTX
WindowsServer 2008 R2 Standard | YC6KT-GKW9T-YTKYR-T4X34-R7VHC
WindowsServer 2008 R2 企业版 | 489J6-VHDMP-X63PK-3K798-CPX3Y
WindowsServer 2008 R2 Datacenter | 74YFP-3QFB3-KQT8W-PMXWJ-7M648
面向基于 Itanium 系统的 Windows Server 2008 R2 | GT63C-RJFQ3-4GMB6-BRFB9-CB83V

#### Windows Server 2008

操作系统版本 | KMS 客户端安装密钥
--- | ---
Windows Web Server 2008 | WYR28-R7TFJ-3X2YQ-YCY4H-M249D
Windows Server 2008 Standard | TM24T-X9RMF-VWXK6-X8JC9-BFGM2
不带 Hyper-V 的 Windows Server 2008 Standard | W7VD6-7JFBR-RX26B-YKQ3Y-6FFFJ
Windows Server 2008 企业版 | YQGMW-MPWTJ-34KDK-48M3W-X4Q6V
不带 Hyper-V 的 Windows Server 2008 企业版 | 39BXF-X8Q23-P2WWT-38T2F-G3FPG
Windows Server 2008 HPC | RCTX3-KWVHP-BR6TB-RB6DM-6X7HP
Windows Server 2008 Datacenter | 7M67G-PC374-GR742-YH8V4-TCBY3
不带 Hyper-V 的 Windows Server 2008 Datacenter | 22XQ2-VRXRG-P8D42-K34TD-G3QQC
面向基于 Itanium 系统的 Windows Server 2008 | 4DWFP-JF3DJ-B7DTH-78FJB-PDRHK