---
title: "Hello World"
date: 2022-01-20T09:56:09+08:00
author: "Ventus"
tags: ["Server","Blog"]
keywords: ["Server","Blog"]
summary: "Blog"
---


***Build this site***

***Hugo Blog 实战***  

<!--more-->

- [♡闲言碎语](/post/hello-world/#闲言碎语)
  - [✦从“信用卡”聊到陈年往事](/post/hello-world/#从信用卡聊到陈年往事)
  - [✦如何选择Hexo与Hugo？](/post/hello-world/#如何选择hexo与hugo)
  - [✦最终选择](/post/hello-world/#最终选择)
- [♡准备工作](/post/hello-world/#准备工作)
  - [✦安装环境和工具](/post/hello-world/#安装环境和工具)
- [♡开始实战](/post/hello-world/#开始实战)
  - [✦本地搭建](/post/hello-world/#本地搭建)
    - [将 hugo 添加到环境变量](/post/hello-world/#将-hugo-添加到环境变量)
    - [Git Bash](/post/hello-world/#git-bash)
    - [文件夹内容目录](/post/hello-world/#文件夹内容目录)
    - [安装VS code 插件](/post/hello-world/#安装-vs-code-插件)
    - [生成 git 本地仓库](/post/hello-world/#生成-git-本地仓库)
    - [生成 SSH 密钥](/post/hello-world/#生成-ssh-密钥)
    - [安装主题](/post/hello-world/#安装主题)
    - [本地搭建预览](/post/hello-world/#本地搭建预览)
  - [✦根目录同步私有仓库](/post/hello-world/#根目录同步私有仓库)
    - [源码、 Public 分开存放](/post/hello-world/#源码-public-分开存放)
    - [上传公钥](/post/hello-world/#上传公钥)
    - [远程连接测试](/post/hello-world/#远程连接测试)
    - [生成 Token，用于连接两个仓库](/post/hello-world/#生成-token用于连接两个仓库)
    - [Push 本地到私有仓库](/post/hello-world/#push-本地到私有仓库)
    - [私有仓库生成 Secrets](/post/hello-world/#私有仓库生成-secrets)
  - [✦自动部署到公开仓库](/post/hello-world/#自动部署到公开仓库)
  - [✦CDN加速](/post/hello-world/#cdn加速)
  - [✦大功告成](/post/hello-world/#大功告成)
- [♡填坑后记](/post/hello-world/#填坑后记)
- [♡写在最后](/post/hello-world/#写在最后)

```javascript
+ 2022.02.11 add 侧边栏 鼠标指针 样式
```

```javascript
+ 2022.01.26 Update autodeploy.yml 实现 Hugo Blog 源码github  gitee  gitlab三端同步 (可以没有 | 就很帅)
```

```javascript
+ 2022.01.26 Done 😎
```

```javascript
+ 2022.01.26 <争取一口气把剩下的内容填完> 并没有 | Markdown的排版比码字更费事 💦
```

```javascript
+ 2022.01.24 简简单单的两个美化项目又变成了好几个      😥 😥 😥
```

```javascript
+ 2022.01.23 前言 <写了一些废话>
```

```javascript
+ 2022.01.20 萌生写下这篇文章的想法 并把大纲po在这里
```

## ♡闲言碎语

### ✦从“信用卡”聊到陈年往事

- 前段时间，在老婆的支持下(“盗”刷老婆信用卡，orz)，买了一个十年的域名，起初拿来也就无非是给服务器套个域名，加个SSL，反代一些需要用到的web工具。想着这个域名好歹也是`千挑万选`出来的（Sia刚好与老婆名字谐音，所以自然而然地在前面加个Luv不过分吧，2333），现在的朋友圈基本上也没咋发过东西，全都是一些工作上的琐事。不如开个博客，记录一下生活（主要是用着这么有`内涵`的域名，让老婆感受一下应有的尊重，还能升华彼此的感情，哈哈哈，扯远了），还可以把自己“搞机爱好”（`折腾癖好`）的过程记录下，把[README](https://luvsia.com/)中所说的`Ctrl+C`，`Ctrl+V`变为自己的知识，而不是只会复制粘贴，成了一个`工具`人。让这项爱好不至于太肤浅，还能真正掌握一下基础的编程知识。

- 这篇博客，主要是记录下整个Blog的搭建基本思路与部署过程，Blog完成`Hello World`之后，后续一直在跟进基础美化、插件适配的工作，所以这篇文章也就搁置如今。“简简单单”的~~~两个美化项目~~~，碍于能力有限，三天时间才完成80%，真`tm`惨...

- 在刚接触到Blog搭建还是在近6年以前，也是搞了个域名，搭了服务器，并把博客部署在服务器上，用的是`WordPress`。在当时，`WordPress`就已经是一个成熟的网站建设工具。`WordPress`功能是挺强大，主题、插件多，用户量基数也大，很容易就可以找到一些自己喜欢的“小物件”放到自己的博客上。奈何当时对代码之类的东西一窍不通，完全是通过可视化操作去完成的，也就不知道Go语言与PHP语言的区别，当然PHP语言在当时依然是主流。那会儿不仅要把精力放在服务器的维护上，还要把网站的Blog给弄好，还要用到Nginx、Mysql、phpmyadmin一大堆工具，还要在数据库中修改才能满足一些自己的需求，可以说是十分的繁琐。后来因为原服务器废弃，数据也没有转移，也没有本地保存，折腾的东西也就随之而去了...

- 很久没有接触这方面的知识，现在就相当于回炉重造。了解了一下目前主流的Blog建站工具之后，Hexo和Hugo进入我的眼帘。从搜索引擎的数据上来看，Hexo的内容量与Hugo相比，完全不在一个数量级...
![Hexo](/images/hello-world/Hexo.png)
![Hugo](/images/hello-world/Hugo.png)
- 传统在服务器部署，虽然本地也可以操作，修改内容，但大部分人都是仅仅只在服务器上完成，省去了本地修改、远程部署的步骤。导致服务器一崩，所有数据都随风而去...比如我自己在几年前也是如此。现如今，静态网站成为主流，Go语言也让国际大厂争先使用，像**Google，Dropbox，SoundCloud，Twitter，PayPal**等公司都用 Go 语言构建了他们的后端系统。

### ✦如何选择Hexo与Hugo？

**Hugo中文文档：**

- Hugo是由Go语言实现的静态网站生成器。简单、易用、高效、易扩展、快速部署。当前的静态网站生成工具对环境依赖过多，性能较差，于是使用 Go 语言写了一个静态网站生成器 Hugo。不仅解决了环境依赖、性能较差的问题，还有使用简单、部署方便等诸多优点，通过 LiveReload 实时刷新，极大的优化文章的写作体验。Hugo 能做什么？通过 Hugo 你可以快速搭建你的静态网站，比如博客系统、文档介绍、公司主页、产品介绍等等。

**Hexo中文文档：**

- 什么是Hexo ? Hexo是一款基于Node.js的静态博客框架,依赖少易于安装使用,可以方便的生成静态网页托管在GitHub和Heroku上,是搭建博客的首选框架。

### ✦最终选择

- 可以看出，Hexo与Hugo都是静态网站生成器的首选，而且都可以用上[`Github-Pages`](https://pages.github.com/)。在网上筛选了使用者反馈信息之后，最终我还是选择了用Go语言编写的`Hugo`+`Github-Pages`+`CDN`来搭建此Blog。

## ♡准备工作

### ✦安装环境和工具

|环境|||工具||
|---|---|---|---|---|
|Windows|Hugo|Git|VS code|github-pages|

- [VS Code](https://code.visualstudio.com/)：巨硬出品的一款开发集成工具。功能之强大让我感觉，我之前的传统敲代码、找依赖的方式太2了。
  
- [Git](https://git-scm.com/)：一个版本控制系统，连接 Github 的钥匙。

- [Github-pages](https://pages.github.com/)：Github出品，必属精品！等等，这句话怎么这么耳熟？又想到github也被巨硬收购了...细思极恐...

- [Hugo](https://github.com/gohugoio/hugo/releases)：今天的主角，本地新建一个名为"Hugo"的目录、一个名为"Sites"的用于存放所有博客站点的目录，Hugo 目录下应有三个文件；同时，下载好 Git 程序。

## ♡开始实战

### ✦本地搭建

#### 将 hugo 添加到环境变量

- `WIN+R` 输入 `sysdm.cpl` ，`高级`===>> `环境变量` ===>> `Path` ===>> 添加刚才新建的 `Hugo` 中的 `bin` 目录， `bin` 中放进刚刚下载的 `hugo.exe`

> Hugo
>> bin
>>>hugo.exe
>>
>> Site
>>> example

#### Git Bash

- 进入 Site 文件夹，鼠标右键 `Git Bash` 或打开 `Git Bash` 后 `cd` 到这个目录，创建 hugo 博客所在目录

```java
hugo new site <example>
```

#### 文件夹内容目录

>**example**
>>**archetypes** # 存放模板
>>>**default.md** # 模板
>>
>>**config.toml** # 基础配置文件
>>
>>**content** # 存放 page 与 post，所有新博文都要存放在 content 中
>>
>>**data** # 存放数据模板
>>
>>**layouts** # 存放布局模板文件，如果想要调整主题中的页面布局，可以在 layouts 中放入同名文件，hugo 将优先读取根目录中的 layouts 文件，避免直接修改主题文件，导致不必要的错误
>>
>>**static** # 存放静态资源，比如自定义 css、图片图标等
>>
>>**themes** # 主题文件夹

#### 安装 VS code 插件

- 打开 VS Code 软件。点击Extensions，安装所需插件。推荐几个必备和好用的插件。

  - **gpm** 用来管理 Github 上的文件。 **必备**
  
  - **Setting Sync** 同步 Github 与本地文件。 **必备**
  
  - **Markdown All in One** 使用 Markdown 写作的利器。**必备**
  
  - **Chinese Language Pack for Visual Studio Code** VS Code 的汉化插件。 *推荐*
  
  - **Auto Rename Tag** 如果涉及修改代码的时候，非常好用。*推荐*
  
  - **Material Icon Theme** 一套个性的图标主题。 *推荐*

#### 生成 git 本地仓库

- 进入新生成的博客文件夹并初始化一个空的 git 本地仓库，之后博客文件夹里会出现一个隐藏的.git 文件夹

```javascript
cd <example>
```

```javascript
git init
```

#### 生成 SSH 密钥

***仅首次，后面可以记录下，以备使用***

- SSH key 一般存储在系统盘 C: \Users<用户名>.ssh 目录中，git 全局设置存在 C: \Users<用户名>.gitconfig 文件中。

```bash
ssh-keygen -t rsa -C "example@email.com" #最好是github账号邮箱。
```
  
- 之后会跳出一堆提示，在系统提示输入 passphrase 时直接回车不添加。生成的密钥对会储存在 C: \Users<用户名>.ssh 中，公钥存放在 id_rsa.pub 里，私钥存放在 id_rsa 里，妥善保管密钥对，公钥稍后需要使用，私钥非极特殊情况勿上传！

- 在博客根目录进行 git 的配置。最好是github账号、邮箱。本地提交 commit 时 github 上可以查看提交者信息。

```bash
git config user.name "examplename"
```

```bash
git config user.email "example@email.com"
```  

#### 安装主题

- **找到喜欢的[主题](https://themes.gohugo.io/themes/github-style)，在themes目录下 git clone 或者 git submodule add ，模块化安装能够方便升级主题(根目录上传到GitHub后，themes文件夹会链接到主题仓库界面，后面要用到的action要想跑起来一定要记得加上submodule的配置）。**

- **以本博客主题为例，用模块方式安装， themes/github-style 为安装到目标文件夹**

```c
git submodule add git@github.com:MeiK2333/github-style.git themes/github-style
```
  
- 打开新的 config.toml 文件，修改 theme = “example-theme” 为你安装的主题名，主题名要与 themes 中的主题文件夹名称一致。

#### 本地搭建预览

- 至此，本地博客就搭建好了。在博客根目录下 git bash，使用 hugo server 来看下主题的效果！（hugo server -D 的话草稿也会显示，注意是大写 D）跳出一大堆提示后，在任意浏览器打开 <http://localhost:1313> 就能实时查看博客效果与调整。如果的博客设置有误，页面会无法查看，请先排除错误后再进行尝试。不需要查看后 Ctrl+C 退出即可。

### ✦根目录同步私有仓库

#### 源码、 Public 分开存放

- 建两个 **repositories** ，一个存放**根目录文件**，设置为私密，另一个用来存放 **public** 中的内容，设置为公开

#### 上传公钥

***这里选择直接上传到该 github 用户的 setting 里***

- 点击 github 页面右上角头像右侧下拉按钮，进入 **Settings**，找到左侧页面 **SSH and GPG keys** ，点击 **New SSH key** ，取一个便于识别的名称，下方填入之前生成的id_rsa.pub中的内容（以"ssh-rsa"开头，以邮箱结尾）。

#### 远程连接测试

```java
ssh -T git@github.com
```

***显示 successfully 字样即可***

```java
Hi <github-username>! You've successfully authenticated, but GitHub does not provide shell access.
```

#### 生成 Token，用于连接两个仓库

- 右上角 **Settings** 里找到 **Developer settings** ，再点 **Personal access tokens** ，**Generate new token** 生成新的 **token** ，有效期可选永久生效。

- **Select scopes** 里勾选 **repo** 全部内容与 **workflow**。最后点击绿色按钮生成。

- 页面刷新后这个 **Token** 将不再显示，所以在导入前不要弄丢！

#### Push 本地到私有仓库

- 打开刚刚建立的私有仓库，复制SSH克隆代码，在 VS code 中的项目管理中点 + 克隆，粘贴，回车即可克隆。前提：本地的公钥与 github 设置里的公钥信息要一致。至此远程与本地即可连接成功。

- 将本地的博客根目录内容全部粘贴到连接好的私有仓库，开始 push。git 默认的分支应该是(master)，因为现在 github 的默认分支从 master 换成了 main（详见 GitHub 将替换掉 master 等术语 ），我们先切换分支到main：

```javascript
git checkout -b main
```

- push 命令三件套

```bash
git add . # 添加目录下全部内容
git commit -m "new job" # 提交说明，出问题了可以回退到之前的commit
git push -u origin main # 将本地内容推送到远程
```

- 有时候新提交的本地有删除的内容，但是远端并没有删除，将 `-m` 改为 `-am` 即可

- 空文件夹不会被 push 上去，不管；如果有其他文件、文件夹不想 push 上去，在根目录下新建 .gitignore 文件，里面存放不想 push 的内容。

```java
  idea/            //忽略idea目录下的所有文件
  /idea/do.txt     //忽略某个具体文件
  !test.txt        //不忽略 test.txt 文件
  /TODO            //仅仅忽略项目根目录下的 TODO 文件，不包括 test/TODO
  *.zip            //忽略所有.zip结尾的文件
  doc/*.txt        //忽略 doc/notes.txt,但不包括 doc/server/arch.txt
  git rm -r --cached idea/do.txt    //-r为递归
```

#### 私有仓库生成 Secrets

- 这一步为自动部署到 public 做准备，进入刚刚建好的 repository，点进它的 **Settings** 中，找到 **Secrets**，点击 **New repository secret**，名称为 **PERSONAL_TOKEN** ，内容为之前备份下来的 [**Token**](/post/hello-world/#生成-token用于连接两个仓库)。

### ✦自动部署到公开仓库

**`Github Action`**

- 进入博客根目录仓库，点上方的 Actions，set up a workflow yourself，之后你会发现 github 会在根目录下新建/.github/workflows/xxx.yml 文件。我的文件名 **autodeploy.yml** 。

```bash
name: luvsia-hugo-blog-autodeploy # 自行命名

on:
  push:
    branches:
      - main  # 博客根目录的默认分支，这里是main，也可是master
  pull_request:

jobs:
  deploy:
    runs-on: ubuntu-latest
    concurrency:
      group: ${{ github.workflow }}-${{ github.ref }}
    steps:
      - uses: actions/checkout@v2
        with:               # 如果你安装主题时用的是git submodule add
          submodules: true  # 那么这三行不必注释掉，这一行填写 true
          fetch-depth: 0    # Fetch all history for .GitInfo and .Lastmod

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'  # 获取最新版本的hugo
          extended: true          # 如果你使用的不是extended版本的hugo，将true改为false

      - name: Build
        run: hugo   # 使用hugo构建静态网页

      - name: Deploy to github
        uses: peaceiris/actions-gh-pages@v3
        if: ${{ github.ref == 'refs/heads/main' }}  # 注意填写main或者master
        with:
          personal_token: ${{ secrets.PERSONAL_TOKEN }} # 如果secret取了其他名称，将PERSONAL_TOKEN替换掉
          external_repository: ventusoon/LuvSia # 填写远程 public 仓库 
          publish_dir: ./public
          cname: luvsia.com        # 填写自定义域名
```

- ***格式参考[GitHub Pages action](https://github.com/marketplace/actions/github-pages-action#%EF%B8%8F-set-personal-access-token-personal_token)***

- 提交 **commit** ，保存， **Action** 变成绿色即成功！

- 这时公开仓库已经自动建了一个名为 **gh-pages** 的分支，里面出现的东西就是源码通过 `Hugo` 命令生成的静态网页文件，此时打开博客域名就可以看到博客内容。

- 根目录下的 config 文件中 base url 更换为自定义域名。

### ✦CDN加速

- 在Cloudflare为自定义域名添加 CNAME 记录，以及四条 A 记录，详见 github 官方说明： [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#about-custom-domain-configuration)

```JavaScript
A @ 185.199.108.153
A @ 185.199.109.153
A @ 185.199.110.153
A @ 185.199.111.153
CNAME @ 指向公开仓库的github域名
CNAME WWW 指向公开仓库的github域名
```

- 进入公开仓库 **Settings** ，**Pages** 页面添加自定义域名，等待 DNS 检验成功，在此页面即可看到 ***仓库的github域名***` 。

- 使用了 CDN，github 上的 **强制https** 按钮可能不能点；如果无法正常显示 https，也可以在Cloudflare建立 **强制https** 规则。

### ✦大功告成

## ♡填坑后记

1. 写新文章最好用命令行新建 md 文件，文件名为英文名最佳，增加解析效率。

```java
hugo new post/first-post.md
```

2. 如在远程端操作过，则在本地执行操作前，都要 git pull 拉取远端数据，同步到本地。上面我们在远程博客根目录新建了 workflow，在本地开始写新的博文前，先在本地的博客根目录进行同步，不然会报错：

```JavaScript
git pull
```

3. 执行 hugo server 过程中错误退出 git，导致之后执行时 1313 端口被占用，windows+r 输入 cmd 或者在VS code中打开 powershell 窗口：

```bash
netstat -aon|findstr "1313"  #筛选使用1313端口的进程
taskkill /f /PID xxxxx  #杀死占用的进程
```

4. 重大更新！！！实现 [Hugo Blog](/post/hello-world/) 源码github、gitee、gitlab三端同步，**特别注意**『格式』，最好在github中添加，避免出错！

- ***分别在gitee、gitlab上新建公钥文件，取名分别为GITEE_KEY、GITLAB_KEY***

- ***更新 autodeploy.yml 文件，在后面加上如下代码***

```bash
  mirror_to_gitee:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout'
        uses: actions/checkout@v1
      - name: 'Mirror to gitee'
        uses: pixta-dev/repository-mirroring-action@v1
        with:
          target_repo_url:
            git@gitee.com:ventusoon/LuvSia.com.git  # gitee仓库链接
          ssh_private_key:
            ${{ secrets.GITEE_KEY }}  # 新建的GITEE_KEY

  mirror_to_gitlab:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout'
        uses: actions/checkout@v1
      - name: 'Mirror to gitlab'
        uses: pixta-dev/repository-mirroring-action@v1
        with:
          target_repo_url:
            git@gitlab.com:ventusoon/LuvSia.com.git  # gitlab仓库链接
          ssh_private_key:
            ${{ secrets.GITLAB_KEY }}  # 新建的GILAB_KEY
```

- **Gitee**

![gitee](/images/hello-world/gitee.png)

- **Gitlab**

![gitlab](/images/hello-world/gitlab.png)

5. **新增 [小康博客](https://www.antmoe.com/posts/a811d614/) 鼠标指针、侧边栏样式。**

- ***在 `extended_head.html` 中添加以下***

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/static-butterfly/dist/css/index.min.css">
```

## ♡写在最后

**本篇文章的[部署流程](/post/hello-world/#开始实战)对网上教程进行了整合，再加上自己的理解而成。**
