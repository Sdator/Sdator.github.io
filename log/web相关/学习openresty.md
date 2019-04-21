# Windows上搭建openresty

---

## 运行环境

* `Windows` 个人情况
* `MSYS2` or `Git Bash` or `MinGW`


## 添加环境变量
 * *export PATH="`(openresty的路径)`:$PATH"*
 * *export PATH="`/D/WEB/openresty-1.13.6.2-win64`:$PATH"*
 * *PATH=`"/D/WEB/openresty-1.13.6.2-win64`:$PATH" && export PATH*


## 库依赖

 * `perl 5.6.1+`
 * `libpcre`
 * `libssl`

### 库安装

* `Debian` 和 `Ubuntu` 用户
```bash
apt-get install libpcre3-dev \
libssl-dev perl make build-essential curl
```
    
* `Fedora` 和 `RedHat` 用户
```bash
yum install pcre-devel openssl-devel gcc curl
```

* !> windows用户无需这些操作

## 命令

>* **启动服务**
    * `start nginx`

>* **自定义web目录**
    * `start nginx -p (path)`
    * `start nginx -p %~dp0`
    * `start nginx -p "D:\WWW"`

>* **查询进程**
    * `tasklist /fi "imagename eq nginx.exe"`

>* **停止服务**
    * `nginx -s stop`

>* **退出服务/结束进程**
    * `nginx -s quit` 
    * `taskkill /pid (ID) /F` *Windows*
    * `taskkill -pid (ID) -F`  *Bash*

>* **重启服务**
    * `nginx -s reload`

>* **重载日志**
    * `nginx -s reopen`

>* **你好世界**
    * `resty -e "ngx.say('Hello, OpenResty\!')"` *Bash*

>* **配置文件路径**
    * `nginx -c ./conf/nginx.conf` *Bash*

>* **语法检测**
    * `nginx -t`


