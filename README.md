# 说明
[https://58mis-fe.github.io/mis-component-doc/](https://58mis-fe.github.io/mis-component-doc/)

## 文档编写说明

Mackdown当中支持直接书写html标签

也支持通过script标签书写脚本或者采用src方式引入

外部设置目录assets用于存放公共资源

内部文档脚本建议直接通过script书写

## 仓库管理

`master`分支用于管理文档文件

`gh-pages`分支用于发布文档

1. 全局安装gitbook

```
npm install gitbook -g
```

2. 生成文档目录

通过修改SUMMARY.md来新增目录
```
# Summary
* [介绍](README.md)
* [Jquery 插件](chapter1/README.md)
    * [Section1.1](chapter1/section1.1.md)
    * [Section1.2](chapter1/section1.2.md)
* [Vue 插件](chapter2/README.md)
* [其他 插件](chapter3/README.md)

// 新增一行
* [我是新增的目录](chapter4/README.md)
// 锁进控制目录层级
    * [Section1.1](chapter1/section1.1.md) 
```
通过init命令来生成目录

```
gitbook init
```

3. 编写文档

4. 发布

在master文件已经上传至git后，也可以采用以下命令发布
```
npm run deploy:gh-pages
```

#### 具体步骤如下

运行以下命令，通过当前资源打包文件
将在当前目录生成`_book`目录

```
gitbook build
```

切换分支至发布分支

```
git checkout gh-pages
```

复制文件
```
cp -r _book/* .
```

上传至对应分支，且修改该分支作为默认`push`的分支
```
git push -u origin gh-pages
```


## TODO

* 可根据相应的需求开发对应的插件

1. gitbook plugin [Docs](https://github.com/GitbookIO/gitbook/tree/master/docs/plugins)
2. markdown it [Repo](https://github.com/markdown-it)

* [gitbook tool](https://toolchain.gitbook.com/syntax/markdown.html)