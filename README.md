# 说明

## 仓库管理

`master`分支用于管理文档文件

`gh-pages`分支用于发布文档

1. 全局安装gitbook

```
npm install gitbook -g
```

2. 生成文档目录

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
通过init命令来生成目录

```
gitbook init
```

3. 编写文档

4. 发布

运行以下命令，通过当前资源打包文件

```
gitbook build
```

切换分支至发布分支

```
git checkout gh-pages
```

复制文件
```
cp -r _book/* .
```

上传至对应分支

```
git push -u origin gh-pages
```

