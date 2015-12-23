# Git的使用教程

## 下载Git
http://git-scm.com/download/
* 1 运行Git Bash使用命令行
* 2 运行Git GUI桌面版(不推荐使用)
* 3 GitHub提供的桌面工具



## 创建ssh key
* 1 $ git config --global user.name "名字"
* 2 $ git config --global user.email "邮箱地址"
* 3 $ ssh-keygen -t rsa -C “上面输入的邮箱” 按3个回车，密码为空。
* 4 把C:\Users\Administrator\.ssh\id_rsa.pub里面的内容拷贝
* 5 把内容复制到GitHub的setting中的SSH KEY中


## 克隆项目
* 1 使用cd命令到要保存项目的文件夹下
* 2 $ git clone https://github.com/weiguangcompany/homepage.git 把项目拷贝到该目录下




## Git常用命令
复制				: git clone git@172.16.40.88:edu/dledu_backend.git
查看分支			: git branch
查看修改			: git status
创建分支并使用该分支: git checkout -b shuhaowong (git checkout -b dev origin/dev 创建远程分支dev到本地dev)
添加到缓冲区		: git add README.md
提交				: git commit -m "modify README.md add line break."
从缓冲区取消		: git reset HEAD file
查看远程信息git		: git remote -v (显示所有的remote)
	$ git remote -v
	origin  git@172.16.40.88:edu/dledu_backend.git (fetch)	: 抓取
	origin  git@172.16.40.88:edu/dledu_backend.git (push)	: 提交
添加到远程git		: git push origin shuhaowong (向远程(remote)origin的分支shuhaowong提交)
更新				: git pull origin shuhaowong
删除分支			: git branch -d branchName
合并分支			: git merge --no-ff -m "merge with no-ff" branchName (把分支"branchName"合并到了当前分支里面)
合并分支			: git rebase -m "merge register to shuhaowong branch" shuhaowong-register
保存当前代码		: git stash (开发到一半时,突然要修复之前的bug,可以把当前工作保存起来,等bug修复后再继续调回现场)
查看stash列表		: git stash list
恢复stash			: git stash apply stash@{0}
删除stash			: git stash drop
恢复并删除stash		: git stash pop

将远程分支信息获取到本地		: git fetch

查看所有远程分支	: git branch -a
删除远程分支		: git branch -r -d origin/addReadME
提交删除远程分支	: git push origin :addReadME
删除远程分支		: git push origin --delete <branchName>

删除add的文件		: git rm --cached src/test/java/com/dinglicom/dledu/resources/TestAuthrityResource.java

如果你还没有克隆现有仓库，并欲将你的仓库连接到某个远程服务器 : git remote add origin <server>
假如你想要丢弃你所有的本地改动与提交，可以到服务器上获取最新的版本并将你本地主分支指向到它 : git fetch origin , git reset --hard origin/master


## Git分支管理策略
http://www.ruanyifeng.com/blog/2012/07/git.html
git merge --no-ff develop 使用--no-ff参数后，会执行正常合并，在Master分支上生成一个新节点。
