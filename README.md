# Test Vue

#### 阮一峰常用 Git 命令清单
http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html
#### git图解：代码区域总结
https://zhuanlan.zhihu.com/p/20175919
```
收藏（Star），方便下次查看
复制克隆项目（Fork）
shadowsocks 一个科学上网的工具？？
```



## 四个重要定义
```
Workspace：工作区
Index / Stage：暂存区
Repository：仓库区（或本地仓库）
Remote：远程仓库
```

## 初始化

#### 1、初始化，在当前目录（项目）下生成.git文件夹 （互传的配置文件） 工作区
```
$ git init
```
#### 2、将某文件（README.md）添加到缓存区
```
$ git add README.md
//git add . 添加当前目录的所有文件到缓存区
//git add -A 将新增、删除、修改的文件改动全保存至缓存区
```
#### 3、将代码从缓存区保存至本地仓库
```
$ git commit -m "备注信息"
```
#### 4、增加一个新的远程仓库，并命名  git remote add [shortname] [url]
```
$ git remote add origin https://github.com/shercoHome/tt.git
```
#### 5、上传本地指定分支到远程仓库  git push [remote] [branch]
```
$ git push -u origin master
```

## push操作

```
$ git add -A
$ git commit -m "first commit"
$ git push -u origin master
```

## 下载远程仓库的所有变动
```
$ git fetch [remote]
```
## 取回远程仓库的变化，并与本地分支合并
```
$ git pull [remote] [branch]
```

## MarkDown 语法测试
https://github.com/shercoHome/testVue/blob/master/MarkDown.md