(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{250:function(t,a,s){"use strict";s.r(a);var r=s(14),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sub-web-modify前端搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sub-web-modify前端搭建"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/youshandefeiyang/sub-web-modify",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sub-Web-Modify前端搭建"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://sub.luvsia.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("本项目"),a("OutboundLink")],1),t._v("基于"),a("a",{attrs:{href:"https://github.com/CareyWang/sub-web",target:"_blank",rel:"noopener noreferrer"}},[t._v("CareyWang/sub-web"),a("OutboundLink")],1),t._v("，重制CSS样式，解决大部分布局细节问题，增加“暗黑模式”，默认自动切换亮/暗模式（点击“太阳/月亮”图标可手动切换），增加“高级功能”点击显示/隐藏，添加短链接选择/自定义功能，增加近百条远程配置，新增"),a("a",{attrs:{href:"https://github.com/youshandefeiyang/sub-web-api",target:"_blank",rel:"noopener noreferrer"}},[t._v("sub-web聚合API"),a("OutboundLink")],1),t._v("，增加上传自定义远程配置/JS进阶排序节点/JS进阶筛选节点等功能！")]),t._v(" "),a("h2",{attrs:{id:"更新系统并安装-node-与-yarn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新系统并安装-node-与-yarn"}},[t._v("#")]),t._v(" 更新系统并安装 Node 与 Yarn")]),t._v(" "),a("p",[t._v("依次运行下面四行代码，若是 CentOS 系统，请自行替换下面前两行命令中的 "),a("strong",[a("code",[t._v("apt")])]),t._v(" 为 "),a("strong",[a("code",[t._v("yum")])])]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("apt update "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("y\napt install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("y curl wget sudo nodejs git\napt install npm\nnpm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g yarn\n")])])]),a("p",[t._v("命令执行完毕以后，请运行下面的代码查询 Node 与 Yarn 是否安装成功，若是成功会返回版本号。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("node "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v\nyarn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("version\n")])])]),a("h2",{attrs:{id:"下载并安装-sub-web-modify"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载并安装-sub-web-modify"}},[t._v("#")]),t._v(" 下载并安装 sub-web-modify")]),t._v(" "),a("p",[t._v("拉取 "),a("strong",[a("code",[t._v("sub-web-modify")])]),t._v(" 程序，并进入 "),a("strong",[a("code",[t._v("sub-web-modify")])]),t._v(" 文件夹")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("git clone https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("youshandefeiyang"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sub"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("modify"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git\ncd sub"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("modify\n")])])]),a("p",[t._v("在项目目录中安装构建依赖项，构建的过程稍微有点长")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("yarn install\n")])])]),a("p",[t._v("使用 webpack 运行 Web 客户端以进行本地开发。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("yarn serve\n")])])]),a("p",[t._v("出现下图则表示前端调试模式启动成功")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ventusoon/LuvSia/gh-pages/images/buildSUB/yarn-success.png",alt:"yarn-success"}})]),t._v(" "),a("h4",{attrs:{id:"这时-我们浏览器访问-http-服务器ip-8080-应该可以进行前端-sub-web-modify-的预览了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#这时-我们浏览器访问-http-服务器ip-8080-应该可以进行前端-sub-web-modify-的预览了"}},[t._v("#")]),t._v(" 这时，我们浏览器访问 "),a("a",{attrs:{href:"http://xn--ip-fr5c86lx7z:8080/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://服务器ip:8080/"),a("OutboundLink")],1),t._v(" 应该可以进行前端 sub-web-modify 的预览了")]),t._v(" "),a("h4",{attrs:{id:"记住8082端口的防火墙和安全组要开放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#记住8082端口的防火墙和安全组要开放"}},[t._v("#")]),t._v(" "),a("em",[t._v("记住8082端口的防火墙和安全组要开放")])]),t._v(" "),a("h2",{attrs:{id:"修改默认后端地址并增加远程规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改默认后端地址并增加远程规则"}},[t._v("#")]),t._v(" 修改默认后端地址并增加远程规则")]),t._v(" "),a("p",[t._v("找到 VPS /root/sub-web-modify/src/views/Subconverter.vue 文件用编辑器打开")]),t._v(" "),a("p",[t._v("找到 backendOptions:将你解析好的后端地址输入进去。域名为你刚才准备的后端域名，要将http改成https，并且增加/sub?的后缀。（这样选项下面就会出现自己的后端地址）")]),t._v(" "),a("p",[t._v('如果不想用后端作者默认提供的转换那可以把 const defaultBackend = 也改成你自己的域名记得加上 ""。')]),t._v(" "),a("p",[t._v("找到 remoteConfig: [ 后回车将喜欢的规则复制进去即可。")]),t._v(" "),a("h2",{attrs:{id:"配置完毕后打包网站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置完毕后打包网站"}},[t._v("#")]),t._v(" 配置完毕后打包网站")]),t._v(" "),a("p",[t._v("配置完毕以后，程序会自动更新，再次刷新前端网页，会出现刚才添加的相关规则。")]),t._v(" "),a("p",[t._v("经过上面的修改默认后端地址和原程配置的规则就修改好了。")]),t._v(" "),a("p",[t._v("至此，我们的前端调试完毕，我们现在需要打包，生成一个发布目录并将他发布了。")]),t._v(" "),a("p",[t._v("首先停止调试程序，CTRL+C ，退出当前调试，然后执行下面的命令进行打包：")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("yarn build\n")])])]),a("p",[t._v("执行以下打包命令，在 /root/sub-web-modify 下面会生成一个 dist 目录，这个目录即为网页的发布目录。")]),t._v(" "),a("p",[t._v("将这个目录的里面的文件复制到你站点的根目录即可。")]),t._v(" "),a("h2",{attrs:{id:"一键搭建前端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一键搭建前端"}},[t._v("#")]),t._v(" 一键搭建前端")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("cd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("root "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" git clone https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("youshandefeiyang"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sub"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("modify"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" chmod "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("755")]),t._v(" sub"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("modify "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" cd sub"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("modify "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" yarn install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" yarn build\n")])])]),a("h2",{attrs:{id:"发布前端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布前端"}},[t._v("#")]),t._v(" 发布前端")]),t._v(" "),a("p",[t._v("没有安装宝塔的去宝塔官网看教程安装.")]),t._v(" "),a("p",[t._v("在宝塔面板中点击增加站点分别将前端站点增加上去，并配置好ssl证书。")]),t._v(" "),a("p",[t._v("将 /root/sub-web/dist文件夹内的所有文件复制到前端站点的根目录下即可。")]),t._v(" "),a("p",[t._v("访问该网站，前端就部署好了。")]),t._v(" "),a("h1",{attrs:{id:"subconverter后端搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subconverter后端搭建"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/tindy2013/subconverter",target:"_blank",rel:"noopener noreferrer"}},[t._v("SubConverter后端搭建"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"新建后端站点并进行反向代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建后端站点并进行反向代理"}},[t._v("#")]),t._v(" 新建后端站点并进行反向代理")]),t._v(" "),a("p",[t._v("在宝塔面板中新建后端的站点，同样配置好ssl并将设置站点的反向代理到25500。")]),t._v(" "),a("p",[t._v("点击新建好的后端网站的网站名在弹出来的消息盒子中点击反向代理添加发现代理。")]),t._v(" "),a("p",[t._v("反向代理配置方法方法如图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ventusoon/LuvSia/gh-pages/images/buildSUB/buildSUB.png",alt:"反代"}})]),t._v(" "),a("p",[t._v("设置完毕后我们开始安装后端")]),t._v(" "),a("h2",{attrs:{id:"搭建后端程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建后端程序"}},[t._v("#")]),t._v(" 搭建后端程序")]),t._v(" "),a("h3",{attrs:{id:"这里我们可以用两种方法搭建后端程序-第一种是用二进制文件搭建-第二种为使用docker搭建。我个人比较推荐docker配置简单一行命令即可搞定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#这里我们可以用两种方法搭建后端程序-第一种是用二进制文件搭建-第二种为使用docker搭建。我个人比较推荐docker配置简单一行命令即可搞定"}},[t._v("#")]),t._v(" 这里我们可以用两种方法搭建后端程序，第一种是用二进制文件搭建，第二种为使用Docker搭建。我个人比较推荐Docker配置简单一行命令即可搞定")]),t._v(" "),a("h4",{attrs:{id:"方法一-二进制文件搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法一-二进制文件搭建"}},[t._v("#")]),t._v(" 方法一 二进制文件搭建")]),t._v(" "),a("h5",{attrs:{id:"下载并解压-subconverter-二进制文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载并解压-subconverter-二进制文件"}},[t._v("#")]),t._v(" 下载并解压 subconverter 二进制文件")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("cd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("root\nwget https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tindy2013"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("subconverter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("releases"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("download"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("v0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("subconverter_linux64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gz\ntar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("zxvf subconverter_linux64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gz\n")])])]),a("h3",{attrs:{id:"完成以后-在-root-文件夹下会多出一个-subconverter-的文件夹-这个就是我们的后端程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完成以后-在-root-文件夹下会多出一个-subconverter-的文件夹-这个就是我们的后端程序"}},[t._v("#")]),t._v(" "),a("em",[t._v("完成以后，在 /root 文件夹下会多出一个 subconverter 的文件夹，这个就是我们的后端程序")])]),t._v(" "),a("h5",{attrs:{id:"修改配置文件参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件参数"}},[t._v("#")]),t._v(" 修改配置文件参数")]),t._v(" "),a("p",[t._v("现在我们需要修改后端配置文件中的一些参数")]),t._v(" "),a("p",[t._v("找到VPS文件 /root/subconverter/pref.ini ，找到如下参数进行修改")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("api_access_token"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("123123dfsdsdfsdfsdf            #随意设置自己知道就行\nmanaged_config_prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("yourdomin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com  #设置成我们刚刚解析的后端域名\nlisten"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),t._v("                                #这里改成 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),t._v(" 进行反代\n")])])]),a("h5",{attrs:{id:"创建服务进程并启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建服务进程并启动"}},[t._v("#")]),t._v(" 创建服务进程并启动")]),t._v(" "),a("p",[t._v("接下来我们需要创建一个服务，让VPS每次重启或是开机自动运行后端程序")]),t._v(" "),a("p",[t._v("找到VPS目录 /etc/systemd/system，创建一个名为 sub.service 的文件")]),t._v(" "),a("p",[t._v("打开文件，贴入以下内容，保存。")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nDescription"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),t._v(" For Subscription Convert\nAfter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("network"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target\n \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("simple\nExecStart"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("subconverter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("subconverter\nWorkingDirectory"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("subconverter\nRestart"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("always\nRestartSec"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nWantedBy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("multi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target\n")])])]),a("h5",{attrs:{id:"检查运行状态以及设置开机自启"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查运行状态以及设置开机自启"}},[t._v("#")]),t._v(" 检查运行状态以及设置开机自启")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("systemctl daemon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("reload\nsystemctl start sub\nsystemctl enable sub\nsystemctl status sub\n")])])]),a("h3",{attrs:{id:"到这里-后端也就搭建完毕了-我们现在可以在浏览器里面访问我们的后端了-访问后端域名后端搭建成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#到这里-后端也就搭建完毕了-我们现在可以在浏览器里面访问我们的后端了-访问后端域名后端搭建成功"}},[t._v("#")]),t._v(" "),a("em",[t._v("到这里，后端也就搭建完毕了，我们现在可以在浏览器里面访问我们的后端了，访问后端域名后端搭建成功！")])]),t._v(" "),a("h4",{attrs:{id:"方法二-docker容器搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法二-docker容器搭建"}},[t._v("#")]),t._v(" 方法二 Docker容器搭建")]),t._v(" "),a("p",[t._v("如果服务器安装了Docker可以使用命令：")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("docker run "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("restart"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("always "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25500")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25500")]),t._v(" tindy2013"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("subconverter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("latest\n")])])]),a("p",[t._v("然后再用下面的命令确认一下状态")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("curl http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("localhost"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25500")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("version\ncurl http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("localhost"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25500")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("version\n")])])]),a("p",[t._v("如果输出当前 subconverter 容器版本几位搭建成功。")])])}),[],!1,null,null,null);a.default=e.exports}}]);