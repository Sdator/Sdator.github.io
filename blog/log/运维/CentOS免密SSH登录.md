# []()CentOS免密SSH登录碰到的一些问题


## 准备工作
* 系统
    * `CentOS 7 x64`
* 所需工具
    * `Bitvise SSH Client`  >   可选
* 用到得命令
    * `ssh-keygen`  >   生成密钥
    * `eval $(ssh-agent -s)`    >   执行ssh-agent
    * `ssh-add ~/.ssh/youkey`   >   添加密钥
    * `chmod`   >   设置权限


今日打算把服务器从新搬出来维护一下，没想到之前的密钥忘了备份丢了，无奈下只有重新创建一个新的密钥。`ssh-keygen`, 由于临时使用并没有linux环境，所以我使用了`Bitvise SSH Client`生成的证书。

> 如果你的是W10应该有集成ssh服务可以在终端中敲ssh测试，这样就不需要`Bitvise SSH Client`了，可直接用命令生成，具体可参考 [服务端创建密钥](#服务端创建密钥)

---

## 创建密钥

* 点击`client key manaqer`
* 点击`Generate new`
* 由于我不需要设置密码默认即可
* `Generate` 完成创建

## 导出密钥

* 选中证书
* 点击`Export`
* 选择`Export pubic Key` 是导出公钥 / 选择`Export private key` 导出私钥
* 选择`OpenSSH format` (linux能兼容的证书格式))
* `Export`

> 这里建议都导出一份自己放好

## 服务端创建密钥
客户端的密钥搞定了，我采用密码方式登进服务器，并把服务端以前的密钥全删了，再创建一个新的密钥执行命令 `ssh-keygen` 然后一路回车即可，中途提示的是设置密码之类的，有需要可自行设置。

创建完毕后会生成两个文件

* `~/.ssh/id_rsa`       私钥
* `~/.ssh/id_rsa.pub`   公钥

> 执行 `cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys` 当然也可手动创建`authorized_keys `文件

## 添加公钥到服务器

接下来为了方便我使用`sftp`打开`authorized_keys`文件，然后把客户端的公钥内容复制进去**替换**掉
> 当然如果你之前已经有其他的公钥就不要覆盖了，在文本的结尾按一下回车然后在下一行粘贴即可

---

## 查错

好了这样基本的免密ssh登录环境就搭好了，接下来在本地采用任意ssh客户端软件测试登录服务器。

!> .....请输入密码...等等什么鬼东西明明已经设置好了怎么还要密码啊？

没办法了再次用密码登进服务器输入查看一下**登录日志**

* `tail /var/log/secure -n 20`

> ***下面是信息反馈的一部分***

```shell
Feb 19 11:55:16 ss sshd[20965]: Disconnected from xx.xx.83.30 port 46367 [preauth]
Feb 19 11:55:16 ss sshd[20965]: PAM 2 more authentication failures; logname= uid=0 euid=0 tty=ssh ruser= rhost=xx.xx.83.30  user=root
Feb 19 11:55:18 ss sshd[20970]: Failed password for root from xx.xx.1.168 port 46852 ssh2
Feb 19 11:55:19 ss sshd[20970]: pam_succeed_if(sshd:auth): requirement "uid >= 1000" not met by user "root"
Feb 19 11:55:21 ss sshd[20970]: Failed password for root from xx.xx.1.168 port 46852 ssh2
Feb 19 11:55:22 ss sshd[20970]: pam_succeed_if(sshd:auth): requirement "uid >= 1000" not met by user "root"
Feb 19 11:55:24 ss sshd[20970]: Failed password for root from xx.xx.1.168 port 46852 ssh2
Feb 19 11:55:25 ss sshd[20970]: pam_succeed_if(sshd:auth): requirement "uid >= 1000" not met by user "root"
Feb 19 11:55:26 ss sshd[20947]: Connection closed by 47.75.144.149 port 43509 [preauth]
Feb 19 11:55:27 ss sshd[20970]: Failed password for root from xx.xx.1.168 port 46852 ssh2
Feb 19 11:55:28 ss sshd[20977]: Authentication refused: bad ownership or modes for directory /root
```

我们注意到最后一条很明显提示的是`/root`文件夹权限出问题了，我看了一下`root`文件夹权限是`777`所有用户都能读写运行应该没问题的啊，最后网上找一下资料发现原来ssh对文件夹的权限有严格的规定 用户组和其他用户的写权限是不能勾上的。

那么我们改一下试试下输入 `chmod 700 /root` 把`root`文件夹的权限改为`700`，当然我们也可以重启一下ssh服务`service sshd restart`。

> **最后完美解决了，问题虽少但困扰了我半天，居然是用户目录的权限影响到了ssh，坑真多！**

> 以下是修改密钥存放目录的权限 如果你需要。

* `chmod 700 ~`
* `chmod 700 ~/.ssh`
* `chmod 600 ~/.ssh/authorized_keys`

> **`id_rsa` 私钥和公钥默认即可，如果你非要改那就用`ssh-keygen` 命令创建一个新的然后参照新的密钥的权限来改吧。**

## 测试命令
* `ssh -V git@gitee.com`
* `ssh -T git@gitee.com`
* `ssh -v git@github.com`
* `ssh -T git@github.com`

#### 后台启动ssh-agent

* `eval $(ssh-agent -s)`

#### 添加私钥到ssh中

* `ssh-add ~/.ssh/mayun`


![我是金馆长](../../img/jgz.jpg ':size=200')


> #### []()2019/2/19 PM By：Air