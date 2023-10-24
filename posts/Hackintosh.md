---
title: "Hackintosh"
date: 2023-04-08T02:04:08+08:00
author: "Ventus"
tags: ["Hackintosh"]
summary: "***Hackintosh黑苹果重启计划***"
---

***Hackintosh Reboot Plan***

## 闲话 回忆与现在

* 从大学接触黑苹果开始，算起来已经有了**8、9**年的时光了，想起那会的“废寝忘食”，真是让人觉得虚度光阴、浪费精力。也许也是从那时候开始，养成了爱折腾的习惯。

* 之前家里闲置的笔记本被我拿来做软路由，最开始只是在 *pve* 上跑 *openWRT* ，满足一些魔法需求，刚好最近又在搞内网穿透，这台单网口、传输速率低得吓人的设备实在无法满足现在愈来愈强的需求。

* 故此，本意是在网上选购一台性价比较高的软路由，选着选着不知道怎就看到了一台十分合心意的小主机，实在按捺不住折腾的心情，就对老婆先斩后奏买了下来（幸得老婆宽厚，又加上我整天闹着要 *NAS* ，对比之下，这台小主机的价格还是让她允了下来）

* 刚好因工作原因经常奔波两地，加上最近频繁地码字建站，用这台小主机组一台黑苹果，重温下精美的 *MacOS* ，既能在家里和单位用，也能提高码字的效率，办公、开发两不误。

## 主机及配置

* 在网上看了很多视频和教程，左挑右选，最终选择了惠普的 *800-G4-DM* 准系统主机，外加 *I5 8500T* 的8代 *cpu*。基本配置如下：

* ||主机|*惠普 HP EliteDesk 800 G4 DM*||
|:---:|:---:|:---:|:---:|
||**主板**|惠普Q370|||
|| **CPU** |酷睿 i5 8500T ||
|| **显卡** |集成 Intel UHD Graphics 630||
|| **内存** |DDR4 2400MHz 三星16GB（2X8GB）||
||**无线网卡**|博通 BCM94352Z 无线/蓝牙网卡|||
||**固态硬盘**|台电 256G SSD （加装2T SATA SSD）|||
||**OpenCore**|0.9.1|||
||**MacOS**|Ventura 13.3.1 (22E261)||| 

<p align="center"><img height=435 src=/images/Hackintosh/1.png></p>

* 完美主义的黑苹果完美度：

* |||状态|完美||
|:---:|:---:|:---:|:---:|:---:|
|**CPU**|**睿频**|Yes|✔︎||
||**VDA 解码器**|完全支持|✔︎||
|**IGPU**|**硬件加速（QE/CI）**|Yes|✔︎||
||**Metal支持**|Yes|✔︎||
|**USB**|**定制/完整识别**|Yes|✔︎||
|**网卡**|**内建**|Yes|✔︎||
|**WIFI**|**免驱**|Yes|✔︎||
|**蓝牙**|**全功能**|Yes|✘|Hackintool无法识别，使用正常（又不是不能用.jpg）|
|**AirDrop**|**全功能**|No|✘|仅支持从iOS端投送到Mac|
|**核显输出**|**定制/全功能**|No|✘|截编时只完美一个“DP-HDMI”，其余两个输出口等有测试显示器再折腾|
|**声音**|**全功能**|Yes|✔︎||
|**序列号**|**有效没有被用过的序列号**|Yes|✔︎||
|**iMessage**|**全功能**|Yes|✔︎|解放手机 *Get*|
|**随航**|**功能**|Yes|✔︎|新功能真爽，iOS和 macOS无缝衔接|
|**HiDPi**|**开启**|No|✘|能开，显示器物理分辨率太低，再开启HiDPi的分辨率更低，就很难受（有了4K显示器再说吧）|
|**睡眠**|**开启**|Yes|✔︎|随睡随醒|

* 系统图鉴

* <img width=800 src=/images/Hackintosh/2.png>

<details>
<summary>
View More Screenshots
</summary>

![1](/images/Hackintosh//3.png)
![1](/images/Hackintosh//4.png)


</details>

* [主机图鉴](https://www.hacktiny.com/posts/2740.html)

![1](/images/Hackintosh/HP-EliteDesk-800-G4-35W-09.jpg "图鉴")

<details>
<summary>
View More Screenshots
</summary>

<img width=435 src=/images/Hackintosh/HP-EliteDesk-800-G4-35W-12.jpg>
<img width=435 src=/images/Hackintosh/HP-EliteDesk-800-G4-35W-13.jpg>
<img width=435 src=/images/Hackintosh/HP-EliteDesk-800-G4-35W-14.jpg>
<img width=435 src=/images/Hackintosh/HP-EliteDesk-800-G4-35W-15.jpg>
<img width=435 src=/images/Hackintosh/HP-EliteDesk-800-G4-35W-16.jpg>
<img width=435 src=/images/Hackintosh/HP-EliteDesk-800-G4-DM-35W-dGPU-03.jpg>
<img width=435 src=/images/Hackintosh/HP-EliteDesk-800-G4-DM-35W-Lock-01.jpg>
<img width=435 src=/images/Hackintosh/HP-EliteDesk-800-G4-DM-35W-Lock-02.jpg>

</details>


## 工具及配参

* 全部参考[ *opencore* 中文安装指南](https://sumingyd.github.io/OpenCore-Install-Guide/) 进行操作和配置参数

### 所需工具

|名称|用途|下载|
|:---:|:---:|:---:|
|SSDTTime|获取DSDT、SSDT|[Download](https://github.com/corpnewt/SSDTTime)|
|ACPICA|编译和反编译DSDT|[Download](https://acpica.org/downloads/binary-tools)|
|OpenCorePkg|OpenCore引导加载程序|[Download](https://github.com/acidanthera/OpenCorePkg/releases)|
|ProperTree|跨平台GUIPlist编辑器|[Download](https://github.com/corpnewt/ProperTree)|
|gibMacOS|MacOS恢复镜像下载工具|[Download](https://github.com/corpnewt/gibMacOS)|
|GenSMBIOS|生成SMBIOS|[Download](https://github.com/corpnewt/GenSMBIOS)|
### 环境搭建

* 下载[ *7-Zip windows* ](https://www.7-zip.org/a/7z2201-x64.exe)版本并安装。

* 下载[ *Python windows* ](https://www.python.org/ftp/python/3.11.3/python-3.11.3-amd64.exe)最新版并安装，注意要选择 *Add to Path* ，将 *Python* 添加到系统环境。

    ![2](/images/Hackintosh/Python.png "Python")

