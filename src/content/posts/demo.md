---
title: 实验4
published: 1970-01-01
tags: [Markdown, 博客, 演示]
category: 文章示例
draft: true
---


实验4 

不太清楚 数据叫什么 我就在这个 demo数据库

1 创建数据库 和表

```mysql
CREATE DATABASE demo; # 创建数据库 demo
USE demo; #进入数控demo

#在数据库 demo中创建表
CREATE TABLE `黑龙江省高铁运行数据表` (
    `铁路名称` VARCHAR(50) NOT NULL,
    `省内里程` INT NOT NULL,
    `设计时速` INT NOT NULL,
    `开通时间` DATE NOT NULL
);

```

<img src="C:\Users\Theropej\AppData\Roaming\Typora\typora-user-images\image-20260408181148161.png" alt="image-20260408181148161" style="zoom:50%;" /> 

<img src="C:\Users\Theropej\AppData\Roaming\Typora\typora-user-images\image-20260408181304111.png" alt="image-20260408181304111" style="zoom: 67%;" /> 

2 使用 SQL 命令插入第 1~2 条记录

```mysql
INSERT INTO `黑龙江省高铁运行数据表` (`铁路名称`, `省内里程`, `设计时速`, `开通时间`)
VALUES ('哈大高铁', 81, 350, '2012-12-01'), ('哈齐高铁', 266, 300, '2015-08-17');
```

![image-20260408181252556](C:\Users\Theropej\AppData\Roaming\Typora\typora-user-images\image-20260408181252556.png)

 a. `INSERT INTO` 语法

```mysql

INSERT INTO 后面跟你的表名， 使用括号里面填写，刚刚添加的 （字段名称)，
VALUES 填写要添加的数据 ，顺序是按照上面 填写的字段名称来定 也推荐用 () 写入 

```



























