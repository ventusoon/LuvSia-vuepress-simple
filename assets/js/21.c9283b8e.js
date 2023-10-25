(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{255:function(t,r,s){"use strict";s.r(r);var v=s(14),e=Object(v.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("blockquote",[r("p",[r("em",[r("strong",[t._v("KMS Server Installation and Deployment Tutorial")])])])]),t._v(" "),r("h2",{attrs:{id:"关于脚本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关于脚本"}},[t._v("#")]),t._v(" 关于脚本")]),t._v(" "),r("ul",[r("li",[r("em",[t._v("KMS")]),t._v(" 服务安装完成后会加入开机自启动。")]),t._v(" "),r("li",[t._v("默认记录日志，其日志位于 /var/log/vlmcsd.log。")])]),t._v(" "),r("h2",{attrs:{id:"开始部署"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开始部署"}},[t._v("#")]),t._v(" 开始部署")]),t._v(" "),r("ul",[r("li",[t._v("使用 "),r("em",[t._v("root")]),t._v(" 用户登录，运行以下命令：")])]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" --no-check-certificate https://github.com/teddysun/across/raw/master/kms.sh "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x kms.sh "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" ./kms.sh\n")])])]),r("ul",[r("li",[t._v("安装完成后，输入以下命令查看端口号 1688 的监听情况")])]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-nxtlp")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1688")]),t._v("\n")])])]),r("ul",[r("li",[t._v("返回值类似于如下这样就表示 "),r("em",[t._v("OK")]),t._v(" 了：")])]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("tcp    "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("    "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:1688   "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:*   LISTEN   "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("3200")]),t._v("/vlmcsd         \ntcp    "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("    "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" :::1688        :::*        LISTEN   "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("3200")]),t._v("/vlmcsd \n")])])]),r("ul",[r("li",[t._v("本脚本安装完成后，会将 "),r("em",[t._v("KMS")]),t._v(" 服务加入开机自启动。")])]),t._v(" "),r("h2",{attrs:{id:"其他命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他命令"}},[t._v("#")]),t._v(" 其他命令")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("启动：/etc/init.d/kms start\n停止：/etc/init.d/kms stop\n重启：/etc/init.d/kms restart\n状态：/etc/init.d/kms status\n")])])]),r("h2",{attrs:{id:"卸载方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#卸载方法"}},[t._v("#")]),t._v(" 卸载方法")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("./kms.sh uninstall\n")])])]),r("h2",{attrs:{id:"激活步骤"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#激活步骤"}},[t._v("#")]),t._v(" 激活步骤")]),t._v(" "),r("ul",[r("li",[t._v("使用管理员权限运行 "),r("em",[t._v("cmd")]),t._v(" 查看系统版本，命令如下：")])]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("wmic os get caption\n")])])]),r("ul",[r("li",[t._v("使用管理员权限运行 cmd 安装从上面列表得到的 key，命令如下：")])]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("slmgr /ipk xxxxx-xxxxx-xxxxx-xxxxx-xxxxx\n")])])]),r("ul",[r("li",[t._v("使用管理员权限运行 cmd 将 KMS 服务器地址设置为你自己的 IP 或 域名，后面最好再加上端口号（:1688），命令如下：")])]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("slmgr /skms Your IP or Domain:1688\n")])])]),r("ul",[r("li",[t._v("注意：本脚本所做的工作就是此步骤。当你的 KMS 服务出于启动状态，那么此处就可以设置为你自己的 KMS 服务器地址。\n使用管理员权限运行 cmd 手动激活系统，命令如下：")])]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("slmgr /ato\n")])])]),r("ul",[r("li",[t._v("关于 Office 的激活，要求必须是 VOL 版本，否则无法激活。\n找到你的 Office 安装目录，32 位默认一般为 C:\\Program Files (x86)\\Microsoft Office\\Office16\n64 位默认一般为 C:\\Program Files\\Microsoft Office\\Office16\nOffice16 是 Office 2016，Office15 就是 Office 2013，Office14 就是 Office 2010。\n打开以上所说的目录，应该有个 OSPP.VBS 文件。\n使用管理员权限运行 cmd 进入 Office 目录，命令如下：")])]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:\\Program Files (x86)\\Microsoft Office\\Office16"')]),t._v("\n")])])]),r("ul",[r("li",[t._v("使用管理员权限运行 cmd 注册 KMS 服务器地址：")])]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("cscript ospp.vbs /sethst:Your IP or Domain\n")])])]),r("ul",[r("li",[t._v("使用管理员权限运行 cmd 手动激活 Office，命令如下：")])]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("cscript ospp.vbs /act\n")])])]),r("h3",{attrs:{id:"主要步骤"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#主要步骤"}},[t._v("#")]),t._v(" 主要步骤")]),t._v(" "),r("ol",[r("li",[t._v("设置服务 "),r("code",[t._v("slmgr -skms Your IP or Domain")])]),t._v(" "),r("li",[t._v("安装密钥 "),r("code",[t._v("slmgr -ipk 版本对应秘钥")])]),t._v(" "),r("li",[t._v("激活系统 "),r("code",[t._v("slmgr -ato")])])]),t._v(" "),r("h3",{attrs:{id:"可用服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#可用服务"}},[t._v("#")]),t._v(" 可用服务")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("Your IP or Domain")]),t._v(" 维护 "),r("strong",[t._v("CNAME")]),t._v(" 指向有效的服务")])]),t._v(" "),r("ul",[r("li",[r("code",[t._v("telnet Your IP or Domain 1688")]),t._v(" 测试服务是否可用")]),t._v(" "),r("li",[r("code",[t._v("tcping Your IP or Domain 1688")])])]),t._v(" "),r("h3",{attrs:{id:"密钥"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#密钥"}},[t._v("#")]),t._v(" 密钥")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://learn.microsoft.com/zh-cn/windows-server/get-started/kms-client-activation-keys",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://learn.microsoft.com/zh-cn/windows-server/get-started/kms-client-activation-keys"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/MicrosoftDocs/windowsserverdocs/blob/main/WindowsServerDocs/get-started/kms-client-activation-keys.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("kms-client-activation-keys.md"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"windows-server-ltsc-版本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows-server-ltsc-版本"}},[t._v("#")]),t._v(" Windows Server（LTSC 版本）")]),t._v(" "),r("h4",{attrs:{id:"windows-server-2022"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows-server-2022"}},[t._v("#")]),t._v(" Windows Server 2022")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("操作系统版本")]),t._v(" "),r("th",[t._v("KMS 客户端安装密钥")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Windows Server 2022 Datacenter")]),t._v(" "),r("td",[t._v("WX4NM-KYWYW-QJJR4-XV3QB-6VM33")])]),t._v(" "),r("tr",[r("td",[t._v("Windows Server 2022 Datacenter Azure Edition")]),t._v(" "),r("td",[t._v("NTBV8-9K7Q8-V27C6-M2BTV-KHMXV")])]),t._v(" "),r("tr",[r("td",[t._v("Windows Server 2022 Standard")]),t._v(" "),r("td",[t._v("VDYBN-27WPP-V4HQT-9VMD4-VMK7H")])])])]),t._v(" "),r("h4",{attrs:{id:"windows-server-2019"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows-server-2019"}},[t._v("#")]),t._v(" Windows Server 2019")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("操作系统版本")]),t._v(" "),r("th",[t._v("KMS 客户端安装密钥")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Windows Server 2019 Datacenter")]),t._v(" "),r("td",[t._v("WMDGN-G9PQG-XVVXX-R3X43-63DFG")])]),t._v(" "),r("tr",[r("td",[t._v("Windows Server 2019 Standard")]),t._v(" "),r("td",[t._v("N69G4-B89J2-4G8F4-WWYCC-J464C")])]),t._v(" "),r("tr",[r("td",[t._v("Windows Server 2019 Essentials")]),t._v(" "),r("td",[t._v("WVDHN-86M7X-466P6-VHXV7-YY726")])])])]),t._v(" "),r("h4",{attrs:{id:"windows-server-2016"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows-server-2016"}},[t._v("#")]),t._v(" Windows Server 2016")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("操作系统版本")]),t._v(" "),r("th",[t._v("KMS 客户端安装密钥")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Windows Server 2016 Datacenter")]),t._v(" "),r("td",[t._v("CB7KF-BWN84-R7R2Y-793K2-8XDDG")])]),t._v(" "),r("tr",[r("td",[t._v("Windows Server 2016 Standard")]),t._v(" "),r("td",[t._v("WC2BQ-8NRM3-FDDYY-2BFGV-KHKQY")])]),t._v(" "),r("tr",[r("td",[t._v("Windows Server 2016 Essentials")]),t._v(" "),r("td",[t._v("JCKRF-N37P4-C2D82-9YXRT-4M63B")])])])]),t._v(" "),r("h3",{attrs:{id:"windows-server-半年频道版本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows-server-半年频道版本"}},[t._v("#")]),t._v(" Windows Server (半年频道版本)")]),t._v(" "),r("h4",{attrs:{id:"windows-server-版本-20h2、2004、1909、1903-和-1809"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows-server-版本-20h2、2004、1909、1903-和-1809"}},[t._v("#")]),t._v(" Windows Server 版本 20H2、2004、1909、1903 和 1809")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("操作系统版本")]),t._v(" "),r("th",[t._v("KMS 客户端安装密钥")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Windows Server Datacenter")]),t._v(" "),r("td",[t._v("6NMRW-2C8FM-D24W7-TQWMY-CWH2D")])]),t._v(" "),r("tr",[r("td",[t._v("Windows Server Standard")]),t._v(" "),r("td",[t._v("N2KJX-J94YW-TQVFB-DG9YT-724CC")])])])]),t._v(" "),r("h3",{attrs:{id:"windows-11-和-windows-10-半年频道版本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows-11-和-windows-10-半年频道版本"}},[t._v("#")]),t._v(" Windows 11 和 Windows 10 (半年频道版本)")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("操作系统版本")]),t._v(" "),r("th",[t._v("KMS 客户端安装密钥")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Windows 10/11 专业版")]),t._v(" "),r("td",[t._v("W269N-WFGWX-YVC9B-4J6C9-T83GX")])]),t._v(" "),r("tr",[r("td",[t._v("Windows 10/11 专业版 N")]),t._v(" "),r("td",[t._v("MH37W-N47XK-V7XM9-C7227-GCQG9")])]),t._v(" "),r("tr",[r("td",[t._v("Windows 10/11 专业工作站")]),t._v(" "),r("td",[t._v("NRG8B-VKK3Q-CXVCJ-9G2XF-6Q84J")])]),t._v(" "),r("tr",[r("td",[t._v("Windows 10/11 专业工作站 N")]),t._v(" "),r("td",[t._v("9FNHH-K3HBT-3W4TD-6383H-6XYWF")])]),t._v(" "),r("tr",[r("td",[t._v("Windows 10/11 专业教育版")]),t._v(" "),r("td",[t._v("6TP4R-GNPTD-KYYHQ-7B7DP-J447Y")])]),t._v(" "),r("tr",[r("td",[t._v("Windows 10/11 专业教育版 N")]),t._v(" "),r("td",[t._v("YVWGF-BXNMC-HTQYQ-CPQ99-66QFC")])]),t._v(" "),r("tr",[r("td",[t._v("Windows 10/11 教育版")]),t._v(" "),r("td",[t._v("NW6C2-QMPVW-D7KKK-3GKT6-VCFB2")])]),t._v(" "),r("tr",[r("td",[t._v("Windows 10/11 教育版 N")]),t._v(" "),r("td",[t._v("2WH4N-8QGBV-H22JP-CT43Q-MDWWJ")])]),t._v(" "),r("tr",[r("td",[t._v("Windows 10/11 企业版")]),t._v(" "),r("td",[t._v("NPPR9-FWDCX-D2C8J-H872K-2YT43")])]),t._v(" "),r("tr",[r("td",[t._v("Windows 10/11 企业版 N")]),t._v(" "),r("td",[t._v("DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4")])]),t._v(" "),r("tr",[r("td",[t._v("Windows 10/11 企业版 G")]),t._v(" "),r("td",[t._v("YYVX9-NTFWV-6MDM3-9PT4T-4M68B")])]),t._v(" "),r("tr",[r("td",[t._v("Windows 10/11 企业版 G N")]),t._v(" "),r("td",[t._v("44RPN-FTY23-9VTTB-MP9BX-T84FV")])])])]),t._v(" "),r("h3",{attrs:{id:"windows-10-ltsc-ltsb-版本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows-10-ltsc-ltsb-版本"}},[t._v("#")]),t._v(" Windows 10 (LTSC/LTSB 版本)")]),t._v(" "),r("h4",{attrs:{id:"windows-10-ltsc-2019"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows-10-ltsc-2019"}},[t._v("#")]),t._v(" Windows 10 LTSC 2019")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("操作系统版本")]),t._v(" "),r("th",[t._v("KMS 客户端安装密钥")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Windows 10 企业版 LTSC 2019")]),t._v(" "),r("td",[t._v("M7XTQ-FN8P6-TTKYV-9D4CC-J462D")])]),t._v(" "),r("tr",[r("td",[t._v("Windows 10 企业版 N LTSC 2019")]),t._v(" "),r("td",[t._v("92NFX-8DJQP-P6BBQ-THF9C-7CG2H")])])])]),t._v(" "),r("h4",{attrs:{id:"windows-10-ltsb-2016"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows-10-ltsb-2016"}},[t._v("#")]),t._v(" Windows 10 LTSB 2016")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("操作系统版本")]),t._v(" "),r("th",[t._v("KMS 客户端安装密钥")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Windows 10 企业版 LTSB 2016")]),t._v(" "),r("td",[t._v("DCPHK-NFMTC-H88MJ-PFHPY-QJ4BJ")])]),t._v(" "),r("tr",[r("td",[t._v("Windows 10 企业版 N LTSB 2016")]),t._v(" "),r("td",[t._v("QFFDN-GRT3P-VKWWX-X7T3R-8B639")])])])]),t._v(" "),r("h4",{attrs:{id:"windows-10-ltsb-2015"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows-10-ltsb-2015"}},[t._v("#")]),t._v(" Windows 10 LTSB 2015")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("操作系统版本")]),t._v(" "),r("th",[t._v("KMS 客户端安装密钥")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Windows 10 企业版 2015 LTSB")]),t._v(" "),r("td",[t._v("WNMTR-4C88C-JK8YV-HQ7T2-76DF9")])]),t._v(" "),r("tr",[r("td",[t._v("Windows 10 企业版 2015 LTSB N")]),t._v(" "),r("td",[t._v("2F77B-TNFGY-69QQF-B8YKP-D69TJ")])])])]),t._v(" "),r("h3",{attrs:{id:"早期版本的-windows-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#早期版本的-windows-server"}},[t._v("#")]),t._v(" 早期版本的 Windows Server")]),t._v(" "),r("h4",{attrs:{id:"windows-server-版本-1803"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows-server-版本-1803"}},[t._v("#")]),t._v(" Windows Server 版本 1803")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("操作系统版本")]),t._v(" "),r("th",[t._v("KMS 客户端安装密钥")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Windows Server Datacenter")]),t._v(" "),r("td",[t._v("2HXDN-KRXHB-GPYC7-YCKFJ-7FVDG")])]),t._v(" "),r("tr",[r("td",[t._v("Windows Server Standard")]),t._v(" "),r("td",[t._v("PTXN8-JFHJM-4WC78-MPCBR-9W4KR")])])])]),t._v(" "),r("h4",{attrs:{id:"windows-server-版本-1709"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows-server-版本-1709"}},[t._v("#")]),t._v(" Windows Server 版本 1709")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("操作系统版本")]),t._v(" "),r("th",[t._v("KMS 客户端安装密钥")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Windows Server Datacenter")]),t._v(" "),r("td",[t._v("6Y6KB-N82V8-D8CQV-23MJW-BWTG6")])]),t._v(" "),r("tr",[r("td",[t._v("Windows Server Standard")]),t._v(" "),r("td",[t._v("DPCNP-XQFKJ-BJF7R-FRC8D-GF6G4")])])])]),t._v(" "),r("h4",{attrs:{id:"windows-server-2012-r2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows-server-2012-r2"}},[t._v("#")]),t._v(" Windows Server 2012 R2")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("操作系统版本")]),t._v(" "),r("th",[t._v("KMS 客户端安装密钥")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Windows Server 2012 R2 Server Standard")]),t._v(" "),r("td",[t._v("D2N9P-3P6X9-2R39C-7RTCD-MDVJX")])]),t._v(" "),r("tr",[r("td",[t._v("WindowsServer 2012 R2 Datacenter")]),t._v(" "),r("td",[t._v("W3GGN-FT8W3-Y4M27-J84CP-Q3VJ9")])]),t._v(" "),r("tr",[r("td",[t._v("WindowsServer 2012 R2 Essentials")]),t._v(" "),r("td",[t._v("KNC87-3J2TX-XB4WP-VCPJV-M4FWM")])])])]),t._v(" "),r("h4",{attrs:{id:"windows-server-2012"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows-server-2012"}},[t._v("#")]),t._v(" Windows Server 2012")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("操作系统版本")]),t._v(" "),r("th",[t._v("KMS 客户端安装密钥")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Windows Server 2012")]),t._v(" "),r("td",[t._v("BN3D2-R7TKB-3YPBD-8DRP2-27GG4")])]),t._v(" "),r("tr",[r("td",[t._v("Windows Server 2012 N")]),t._v(" "),r("td",[t._v("8N2M2-HWPGY-7PGT9-HGDD8-GVGGY")])]),t._v(" "),r("tr",[r("td",[t._v("Windows Server 2012 单语言版")]),t._v(" "),r("td",[t._v("2WN2H-YGCQR-KFX6K-CD6TF-84YXQ")])]),t._v(" "),r("tr",[r("td",[t._v("Windows Server 2012 特定国家/地区版")]),t._v(" "),r("td",[t._v("4K36P-JN4VD-GDC6V-KDT89-DYFKP")])]),t._v(" "),r("tr",[r("td",[t._v("Windows Server 2012 Server Standard")]),t._v(" "),r("td",[t._v("XC9B7-NBPP2-83J2H-RHMBY-92BT4")])]),t._v(" "),r("tr",[r("td",[t._v("Windows Server 2012 MultiPoint Standard")]),t._v(" "),r("td",[t._v("HM7DN-YVMH3-46JC3-XYTG7-CYQJJ")])]),t._v(" "),r("tr",[r("td",[t._v("Windows Server 2012 MultiPoint Premium")]),t._v(" "),r("td",[t._v("XNH6W-2V9GX-RGJ4K-Y8X6F-QGJ2G")])]),t._v(" "),r("tr",[r("td",[t._v("Windows Server 2012 Datacenter")]),t._v(" "),r("td",[t._v("48HP8-DN98B-MYWDG-T2DCC-8W83P")])])])]),t._v(" "),r("h4",{attrs:{id:"windows-server-2008-r2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows-server-2008-r2"}},[t._v("#")]),t._v(" Windows Server 2008 R2")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("操作系统版本")]),t._v(" "),r("th",[t._v("KMS 客户端安装密钥")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Windows Server 2008 R2 Web 版")]),t._v(" "),r("td",[t._v("6TPJF-RBVHG-WBW2R-86QPH-6RTM4")])]),t._v(" "),r("tr",[r("td",[t._v("Windows Server 2008 R2 HPC 版")]),t._v(" "),r("td",[t._v("TT8MH-CG224-D3D7Q-498W2-9QCTX")])]),t._v(" "),r("tr",[r("td",[t._v("WindowsServer 2008 R2 Standard")]),t._v(" "),r("td",[t._v("YC6KT-GKW9T-YTKYR-T4X34-R7VHC")])]),t._v(" "),r("tr",[r("td",[t._v("WindowsServer 2008 R2 企业版")]),t._v(" "),r("td",[t._v("489J6-VHDMP-X63PK-3K798-CPX3Y")])]),t._v(" "),r("tr",[r("td",[t._v("WindowsServer 2008 R2 Datacenter")]),t._v(" "),r("td",[t._v("74YFP-3QFB3-KQT8W-PMXWJ-7M648")])]),t._v(" "),r("tr",[r("td",[t._v("面向基于 Itanium 系统的 Windows Server 2008 R2")]),t._v(" "),r("td",[t._v("GT63C-RJFQ3-4GMB6-BRFB9-CB83V")])])])]),t._v(" "),r("h4",{attrs:{id:"windows-server-2008"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows-server-2008"}},[t._v("#")]),t._v(" Windows Server 2008")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("操作系统版本")]),t._v(" "),r("th",[t._v("KMS 客户端安装密钥")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Windows Web Server 2008")]),t._v(" "),r("td",[t._v("WYR28-R7TFJ-3X2YQ-YCY4H-M249D")])]),t._v(" "),r("tr",[r("td",[t._v("Windows Server 2008 Standard")]),t._v(" "),r("td",[t._v("TM24T-X9RMF-VWXK6-X8JC9-BFGM2")])]),t._v(" "),r("tr",[r("td",[t._v("不带 Hyper-V 的 Windows Server 2008 Standard")]),t._v(" "),r("td",[t._v("W7VD6-7JFBR-RX26B-YKQ3Y-6FFFJ")])]),t._v(" "),r("tr",[r("td",[t._v("Windows Server 2008 企业版")]),t._v(" "),r("td",[t._v("YQGMW-MPWTJ-34KDK-48M3W-X4Q6V")])]),t._v(" "),r("tr",[r("td",[t._v("不带 Hyper-V 的 Windows Server 2008 企业版")]),t._v(" "),r("td",[t._v("39BXF-X8Q23-P2WWT-38T2F-G3FPG")])]),t._v(" "),r("tr",[r("td",[t._v("Windows Server 2008 HPC")]),t._v(" "),r("td",[t._v("RCTX3-KWVHP-BR6TB-RB6DM-6X7HP")])]),t._v(" "),r("tr",[r("td",[t._v("Windows Server 2008 Datacenter")]),t._v(" "),r("td",[t._v("7M67G-PC374-GR742-YH8V4-TCBY3")])]),t._v(" "),r("tr",[r("td",[t._v("不带 Hyper-V 的 Windows Server 2008 Datacenter")]),t._v(" "),r("td",[t._v("22XQ2-VRXRG-P8D42-K34TD-G3QQC")])]),t._v(" "),r("tr",[r("td",[t._v("面向基于 Itanium 系统的 Windows Server 2008")]),t._v(" "),r("td",[t._v("4DWFP-JF3DJ-B7DTH-78FJB-PDRHK")])])])])])}),[],!1,null,null,null);r.default=e.exports}}]);