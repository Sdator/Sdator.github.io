
# []()docker学习
---
## 容器信息

>查看版本
* `docker version`

>列出镜像
* docker images                 列出所有镜像
* docker image ls `容器名字或ID`   列出指定镜像
    * REPOSITORY：表示镜像的仓库源
    * TAG：镜像的标签
    * IMAGE ID：镜像ID
    * CREATED：镜像创建时间
    * SIZE：镜像大小

>查看运行的容器
* docker ps
* docker ps -l 查询最后一次创建的容器

>查看容器内标准输出
* docker logs `容器名字或ID`

## 镜像管理

>查找镜像
* docker search httpd

>下载镜像（也就是安装虚拟系统）
* docker pull hello-world   下载hello-world镜像
* docker pull ubuntu:13.10  下载13.10版本的ubuntu镜像
    * NAME:镜像仓库源的名称
    * DESCRIPTION:镜像的描述
    * OFFICIAL:是否docker官方发布


>运行镜像
* docker run `容器名字或ID`

>制作镜像(从Dockerfile文件里的配置构建容器)
* docker build -t myhello:1.0

>删除镜像
* docker image rm -f myhello:2.0



## 容器管理

* -d:让容器在后台运行。
* -P:将容器内部使用的网络端口映射到我们使用的主机上。

>交互式容器（进入虚拟机终端）
* docker run -i -t ubuntu:15.10 /bin/bash

!>exit命令来退出这个容器

>后台运行
* docker run -d ubuntu:15.10 /bin/sh -c "while"

>把e盘的Docker文件夹映射到虚拟机的data
* docker run --rm -v E:/Docker:/data `容器名字` /data

>使用指定版本的ubuntu系统镜像来运行容器
* docker run -t -i ubuntu:15.10 /bin/bash   15.10版本
* docker run -t -i ubuntu:14.04 /bin/bash   14.04版本

!>如果你不指定一个镜像的版本标签，例如你只使用 ubuntu，docker 将默认使用 ubuntu:latest 镜像

>停止容器
* docker stop

>删除容器
* docker rm `容器名字或ID`

>重启容器
* docker start `容器名字或ID`



!>使用 docker port bf08b7f2cd89 或 docker port wizardly_chandrasekhar 来查看容器端口的映射情况