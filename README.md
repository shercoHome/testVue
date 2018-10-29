# Test Vue

### 仓库（Repository）
### 收藏（Star），方便下次查看
### 复制克隆项目（Fork）
### shadowsocks

## 阮一峰常用 Git 命令清单
http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html

```
Workspace：工作区
Index / Stage：暂存区
Repository：仓库区（或本地仓库）
Remote：远程仓库
```

## 初始化
```
//生成一个README.md文件，写入#tt （非必须）
echo "# tt" >> README.md

//初始化，在当前目录（项目）下生成.git文件夹 （互传的配置文件）
//即生成一个工作区（工作目录、代码编辑）
git init

//将某文件（README.md）添加到缓存区
//git add . 添加当前目录的所有文件到缓存区
//git add -A 将新增、删除、修改的文件改动全保存至缓存区
git add README.md

//将代码从缓存区保存至本地仓库
//引号内为备注信息
git commit -m "first commit"

//增加一个新的远程仓库，并命名  git remote add [shortname] [url]
git remote add origin https://github.com/shercoHome/tt.git

//上传本地指定分支到远程仓库  git push [remote] [branch]
git push -u origin master
```

## push操作

```
git add -A
git commit -m "first commit"
git push -u origin master
```

## test action 88899
## 下载远程仓库的所有变动
$ git fetch [remote]

## 取回远程仓库的变化，并与本地分支合并
$ git pull [remote] [branch]

## test action 888
```
git push -u origin master
```
