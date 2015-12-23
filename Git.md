# Git的使用教程

## 下载Git
http://git-scm.com/download/

运行Git Bash使用命令行

运行Git GUI桌面版(不推荐使用)


## 创建ssh key
* 1 $ git config --global user.name "名字"
* 2 $ git config --global user.email "邮箱地址"
* 3 $ ssh-keygen -t rsa -C “上面输入的邮箱” 按3个回车，密码为空。
* 4 把C:\Users\Administrator\.ssh\id_rsa.pub里面的内容拷贝
* 5 把内容复制到GitHub的setting中的SSH KEY中


## 克隆项目
* 1 使用cd命令到要保存项目的文件夹下
* 2 $ git clone https://github.com/weiguangcompany/homepage.git 把项目拷贝到该目录下
