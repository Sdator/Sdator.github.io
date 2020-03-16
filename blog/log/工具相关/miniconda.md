
## CONDA 常用命令
创建环境
- create 
  - -n 环境名称

列出包
- list 列出当前环境安装的包
  - -n <str> 列出指定环境中安装的包
  - --export > package-list.txt 导出包到文件

## 添加源
```bash
# 查看源
conda config --show-sources
conda config --get channels

# pip临时设置源
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple <packs>..


# 添加清华源
# 1. 执行以下命令或手动创建 .condarc 文件在用户目录 %userprofile%
conda config --set show_channel_urls yes 
# 2. 粘贴以下内容到 .condarc 文件中
channels:
  - defaults
show_channel_urls: true
channel_alias: https://mirrors.tuna.tsinghua.edu.cn/anaconda
default_channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/pro
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  msys2: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  bioconda: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  menpo: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  simpleitk: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud

# 3. 清除索引缓存，保证用的是镜像站提供的索引。
conda clean -i
```


## 例子
```bash
# 创建py2.7环境
conda create -n py27 python=2.7.15

# 创建环境并导入包列表
conda create -n myenv --file package-list.txt
conda create -n py27 python=2.7.15 --file packs.txt

# 初始化环境 需重启 shell
conda init <shellname>
conda init powershell
conda init bash

#切换环境 conda activate 成功率高点 activate Windows 下用
conda activate <envname>
activate <envname>
conda activate py27
activate py27

# 停用退出环境
conda deactivate

# 删除环境
conda env remove --name <envname>
conda env remove -n <envname>
conda remove -n <envname> --all  #未测试
conda env remove --name py27
conda env remove -n py27

#列出环境
conda info --envs
conda info -e

# 导出包
conda list --export > package-list.txt

# 列出包
conda list 、 pip list
conda list --export 、 pip freeze



```