---
title: "利用GitHub Actions自动部署前端到服务器"
date: 2023-10-17T13:56:43+08:00
author: "Ventus"
tags: ["Server", "Front End"]
summary: "***Automatically deploying the Front End to the server using GitHub Actions***"
---


> ***Automatically deploying the Front End to the server using GitHub Actions***

## GitHub Actions介绍及原理

* 接触 **GitHub Actions** 也有一段时间了，目前此blog就是利用 **GitHub Action** [自动部署到GitHub托管](/hello-world/#自动部署到公开仓库)的。今天把此次前端页面成功部署到服务器端的操作方法详细记录下来，顺便按自己理解写些心得。抽空再码字完善（下班时间开工😭）。

* [GitHub Actions 官方文档](https://docs.github.com/zh/actions)：在 GitHub Actions 的仓库中自动化、自定义和执行软件开发工作流程。 您可以发现、创建和共享操作以执行您喜欢的任何作业（包括 CI/CD），并将操作合并到完全自定义的工作流程中。

* 通过文档可以看出 **GitHub Action** 其强大的代码管理、运行部署、测试推送等一体化自动发布部署功能，省去了大量的重复性工作。由于通过ssh客户端连接到服务器，直接进行前端部署，需要安装各种各样的依赖，很大程度上降低了服务器运行效率，且不易对代码进行修正。

* 本教程是在[《用Nginx Proxy Manager部署静态网页》](/nginx-proxy-manager/)基础上延伸出的思路，省去了安装node环境和各种依赖的步骤，直接在 **GitHub Action** 中部署前端。每次在本地对后端文件进行修正后，直接将前端发布到服务器。起到一劳永逸的效果。

<details>
<summary>
GitHub Action 成功示图
</summary>

![GitHub Action成功界面](/images/github-actions-deploy/1.png)

</details>

* 示例分析，以[自动部署到GitHub托管](/hello-world/#自动部署到GitHub托管)为例，分析 **GitHub Action** 工作流程如下

```bash
name: luvsia-hugo-blog-autodeploy # 工作流程名称，自行命名

on:
  push: # 什么时候请求触发
    branches:
      - main  # 作用分支，这里是main，也可是master
  pull_request:

jobs: # 将工作流文件中运行的所有任务分组在一起
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

* 按照示例分析，可以得出简单的 **GitHub Actions** 步骤图如下

> Action
>> 1️⃣作用条件
>>> 时间节点
>>>
>>> 分支
>>
>> 2️⃣工作任务
>>> 运行环境
>>>
>>> 步骤一
>>>
>>> 步骤二
>>>
>>> 步骤 N
>>>
>>> 直接发布到服务器/本地/托管页面

## 实战演练

* 因为要部署到服务器端，所以要了解连接到服务器的方式，这里选择ssh连接，网上有很多教程也用了sftp连接，都可以。

* **GitHub Actions** 部署文件通常以 `xxx.yml` 命名，路径为项目根目录下 `/.github/workflows/xxx.yml` 。

* 在 **GitHub** 页面下编辑 `xxx.yml` ,可以发现右侧的**应用商城**中有很多特色Actions，因为是ssh连接，在这里选择评分较高的 `ssh-deploy` 应用，并使用最新版。

<details>
<summary>
ssh-deploy 应用
</summary>

![ssh-deploy](/images/github-actions-deploy/2.png)

</details>

* 在[![](https://img.shields.io/badge/GitHubAction-easingthemes/ssh--deploy-cyan?logo=github)](https://github.com/easingthemes/ssh-deploy)项目中的 README 中，可以看到其主要配置名称及用途如下。

|配置名称|用途|示例|
|:---:|:---:|:---:|
|SSH_PRIVATE_KEY|SSH密钥|`密钥应使用PEM格式生成`|
|REMOTE_HOST|远程主机|`10.10.10.10`|
|REMOTE_USER|用户|`root`|
|REMOTE_PORT|端口|`默认22`|
|SOURCE|源，需要部署的内容|`/dist`|
|TARGET|对象，要部署的路径|`/data/docker_data/npm/data/sub.ven2s.cn/`|
|ARGS|传递给rsync（同步时）的参数|`-avz --delete`|
|SSH_CMD_ARGS|一组ssh参数，它们必须以-o为前缀，用逗号分隔|`-o SomeArgument=no，-o SomeOtherArgument=5`|
|EXCLUDE|要排除的路径，用逗号分隔|`/dist/, /node_modules/`|
|SCRIPT_BEFORE|在同步之前在主机上运行的脚本|`mkdir -p /data/docker_data/npm/data/sub.ven2s.cn`|
|SCRIPT_AFTER|在同步之后在主机上运行的脚本|`reboot`|

* 做好以上前期工作，现在可以开始操作了

### 在服务器端配置密钥

* 在 `root` 目录下，输入

```c
ssh-keygen -m PEM -t rsa -b 4096

# 生成密钥文件，连续按下两次回车。
# 请注意：您不应该为您生成的私钥设置密码（将其保留为空）。因为 rsync ssh（用于部署）不支持将私钥密码作为命令行参数输入。
```

* 此时， `/root/.ssh/` 下生成了私钥文件 `id_dsa` 、公钥文件`id_dsa.pub` ，根据公钥文件生成`authorized_keys` ，并给以上三个文件分别设置权限。

```java
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
```

```c
chmod 600 ~/.ssh/id_rsa
```

```c
chmod 600 ~/.ssh/id_rsa.pub
```

```c
chmod 600 ~/.ssh/authorized_keys
```

* 此时，客观上服务器端的工作就完成了，如果连接中遇到各种错误提示，请自行 **goggle** ，这里就不赘述了。

### 项目中设置仓库密钥

* 说来真是坑，最开始把**仓库密钥**错填到**代码空间机密**中，一直连接不上，我还以为是服务器的问题，前天甚至弄恍惚了，不小心 `rm -rf /` 了......

<details>
<summary>
仓库机密在GitHub项目中设置的位置
</summary>

![](/images/github-actions-deploy/3.png)

</details>

* 在服务器中 `cat` 密钥，将所有内容复制到上图的 **SSH_PRIVATE_KEY** 中，并填入服务器IP到 **REMOTE_HOST** ，填入 `root` 到 **REMOTE_USER**。（或者直接在yml文件中填入 **"root"** ）

```c
cat ~/.ssh/id_rsa
```

或者

```c
REMOTE_USER: "root"
```

### 发布部署文件到远端

* 我把自动发布nginx-proxy-manager静态页面的文件po在下面，请根据自身的运行环境和依赖进行修改配置即可。

```bash
# 当前工作流的名称
name: sub-web-deploy
on:
  push:
    branches:
      - master

jobs: # 构建的任务，一个工作流有多个构建任务，
  build-and-deploy:
    runs-on: ubuntu-latest # 在什么服务器上面执行这些任务，这里使用最新版本的ubuntu
    
    steps: # 构建任务的步骤，一个任务可分为多个步骤
      # 切换分支
      - name: Checkout
        uses: actions/checkout@v4
      # 步骤2 给当前服务器安装node
      - name: use node
        uses: actions/setup-node@v3.8.1
        with:
          node-version: 18
          cache: "yarn"
      # 步骤3 下载项目依赖    
      - name: install
        run: yarn install
      # 步骤4 打包node项目
      - name: build
        run: yarn build
      # 步骤5 部署项目到服务器
      - name: ssh deploy
        uses: easingthemes/ssh-deploy@v4.1.10
        with:
      # Private key part of an SSH key pair
          SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
      # Remote host
          REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
      # Remote user
          REMOTE_USER: ${{ secrets.REMOTE_USER }}
      # Source directory, path relative to `$GITHUB_WORKSPACE` root, eg: `dist/`
          SOURCE: "/dist/"
      # Script to run on host machine before rsync
          SCRIPT_BEFORE: "mkdir -p /data/docker_data/npm/data/sub.ven2s.cn"
      # Target directory
          TARGET: "/data/docker_data/npm/data/sub.ven2s.cn/"
```

## 如果喜欢请分享此页面，如有疑问请按F5，再进行评论。哈哈

![](/images/github-actions-deploy/4.png)
