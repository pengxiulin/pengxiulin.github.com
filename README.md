pengxiulin.github.com
=====================

## 特点

1. 使用Markdown作为内容
2. 使用Ajax获取内容
3. 尝试使用地址栏转换不刷新

## 数据库

1. 使用MongoDB

## TODO

1. Github更新时，更新当前目录
2. githook开机自启动

## URL设计

1. /
   文章列表
2. /articlename

3. /articlename/articlename
   例如：
   /design/flat/
4. 保留URL
   /2013/(按时间存储)
   /static/(img,script,skin)
   /s/ service


## 存储结构设计

1. article
   id,url,title,time,pic,size,content,parent
2. comment

3. articleHistory

4. user

