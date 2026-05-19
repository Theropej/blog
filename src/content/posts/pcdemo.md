---
title: 思考5
published: 1970-01-01
draft: false
---
# 实训5

看题目要求 应该是如下数据库 和 如下表  
<img src="images\思考题5.assets\image-20260414172634542.png" alt="image-20260414172634542" style="zoom:67%;" />

```mysql
# 数据库 yggl
# 表： 
# departments    
# employees      
# salary  
 
 show databases; # 查看所有数据库 
 
 use yggl; # 进入 yggl 库中
 
 show tables; # 查看 进入的数据库 表 的情况 
 # 如果和我的 截图 一致的话 就没有问题 ，如果出问题 ，需要环境补充
```





## 一. SELECT 的基本使用



① 查询 Employees 表的员工部门号和性别，要求消除重复行：

```mysql
# 要求消除重复行 就是在 SELECT 语句后添加一个参数 DISTINCT 

SELECT DISTINCT 员工部门号, 性别 FROM Employees;

#小pass：

#由于之前环境的原因吧 ，我创建 Employees表时 ，部门号，写成了 员工部门号， 自需要修改下即可

```

<img src="images\思考题5.assets\image-20260414173112301.png" alt="image-20260414173112301" style="zoom: 50%;" />  

② 计算每个雇员的实际收入（实际收入=收入-支出）

```mysql
SELECT 员工编号, (收入 - 支出) AS 实际收入 FROM salary;
```

<img src="images\思考题5.assets\image-20260414174105822.png" alt="image-20260414174105822" style="zoom:50%;" />  

③ 查询 Employees 表中员工的姓名和性别，要求性别值为 1 时显示为“男”，为 0 时显示为“女”

```mysql

SELECT 姓名, 
    CASE WHEN 性别 = 1 THEN '男' 
    WHEN 性别 = 0 THEN '女' 
END AS 性别 FROM Employees;

```

<img src="images\思考题5.assets\image-20260414173400810.png" alt="image-20260414173400810" style="zoom:50%;" /> 





④ 查询每个雇员的地址和电话号码，显示的列标题为 address 和 telephone

```mysql
SELECT 地址 AS address, 电话号码 AS telephone FROM employees;
# 这里考察了 AS别名 给地址 使用AS 变成 address , 电话号码变成 telephone
```

<img src="images\思考题5.assets\image-20260414174327076.png" alt="image-20260414174327076" style="zoom: 67%;" /> 



⑤ 计算 salary 表中员工月收入的平均数

```mysql
SELECT AVG(收入) AS 平均月收入 FROM salary;
#  AVG(收入) 计算salary表中的 收入 总值 ，之后在求平均值 ，在使用AS修改别名成 平均月收入
```



![image-20260414174437559](images\思考题5.assets\image-20260414174437559.png) 

⑥ 计算所有员工的总支出

```mysql
SELECT SUM(支出) AS 总支出 FROM salary;
# 和上面一样 SUM() 函数 求总和
```

<img src="images\思考题5.assets\image-20260414174753119.png" alt="image-20260414174753119" style="zoom: 67%;" />  

⑦ 显示女雇员的地址和电话号码

```mysql
SELECT 地址, 电话号码 FROM employees WHERE 性别 = '0';
#简单的 where 过滤 ，过滤性别等于 0 ; 1是男 0是女
```

<img src="images\思考题5.assets\image-20260414174950243.png" alt="image-20260414174950243" style="zoom:67%;" /> 

⑧ 计算员工总数

```mysql
SELECT COUNT(*) AS 员工总数 FROM employees;
# 使用 COUNT() 计算查询了多少条数据 ，也就是总和 ，因为employees 是员工表
```

<img src="images\思考题5.assets\image-20260414175130941.png" alt="image-20260414175130941" style="zoom:67%;" />  



⑨ 显示员工的最高收入和最低收入

```mysql
SELECT MAX(收入) AS 最高收入, MIN(收入) AS 最低收入 FROM salary;
# 和函数名称一个 MAX 最大 ，MIN 最小  
```

<img src="images\思考题5.assets\image-20260414175223157.png" alt="image-20260414175223157" style="zoom:67%;" /> 



## 二. 条件查询

① 显示月收入高于 2000 元的员工编号

```mysql
SELECT 员工编号 FROM salary WHERE 收入 > 2000;
# 感觉应该不需要解释了吧  where 过滤  收入 > 2000 即可
```

<img src="images\思考题5.assets\image-20260414175504269.png" alt="image-20260414175504269" style="zoom:67%;" /> 

② 查询 1970 年以后出生的员工的姓名和地址A

```mysql
SELECT 姓名, 地址 FROM employees WHERE 出生日期 > '1970-12-31';
# 简单的判断 ，但是你的数据库类型需要一致 ，如下截图一样
```

<img src="images\思考题5.assets\image-20260414175704663.png" alt="image-20260414175704663" style="zoom:67%;" /> 

③ 显示工作年限 3 年以上（含 3 年）、学历在本科以上（含本科）的男性员工的信息

```mysql
SELECT * FROM employees WHERE 工作年限 >= 3
  AND 学历 IN ('本科', '硕士', '博士')
  AND 性别 = '1';
  
# ok 开始上强度了 ，一共三个条件 1. 工作年限 3 年以上(含3年) 那就是 工作年限 >= 3
# 学历在本科以上（含本科 就是 : 学历 IN ('本科', '硕士', '博士'),  IN 就是 包含 只要出现就算
# 男性员工的信息 这个最简单 : 性别 = '1';
# 其中3个条件使用 AND 进行拼接
```
<img src="images\思考题5.assets\image-20260414175704663.png" alt="image-20260414180140748.png" style="zoom:67%;" /> 

④ 查找员工编号中倒数第 2 个数字为 0 的姓名、地址和学历

```mysql
SELECT 姓名, 地址, 学历,员工编号 FROM employees WHERE 员工编号 LIKE '%0_';

# 这里的 WHERE 员工编号 LIKE '%0_'; 就是题目要求 ，匹配 员工编号倒是第二个为0的员工
# LIKE 关键词是进行过滤 ，在 '' 中写入表达式， % 表示匹配所有，0 就是0 而_ 是匹配 任意字符 
# 也就是 说 '%0_' 就是匹配任意开头 ，倒数第二个为0 最后一个字符为任意
```

<img src="images\思考题5.assets\image-20260414181002359.png" alt="image-20260414181002359" style="zoom:67%;" />  

⑤ 查询月收入在 2000~3000 元的员工编号

```mysql
SELECT 员工编号 FROM salary WHERE 收入 >= 2000 AND 收入 <= 3000;

# 间的的 where过滤 
# 也可以使用下面的sql语句

SELECT 员工编号 FROM salary WHERE 收入 BETWEEN 2000 AND 3000;

```



<img src="images\思考题5.assets\image-20260414181122821.png" alt="image-20260414181122821" style="zoom:67%;" /> 





# 思考题5



## 1 创建表的数据结构和插入数据

由于题目都是查询相关的题 ，所以第一步先补充环境

```mysql
# 首先选择数据库

show databases; #查看你的数据库

#由于我没看见照片上的数据库叫什么
#这里我就先使用 demo数据库

use demo;

# 创建学生信息表
CREATE TABLE XS (
    学号 CHAR(6) PRIMARY KEY,
    姓名 VARCHAR(20), 
    专业名 VARCHAR(30),
    性别 BIT(1),  -- 1:男 0:女
    出生时间 DATE,
    总学分 INT,
    照片 BLOB,
    备注 TEXT
);

# 创建课程表
CREATE TABLE KC (
    课程号 CHAR(3) PRIMARY KEY,
    课程名 VARCHAR(30),
    开课学期 TINYINT,
    学时 INT,
    学分 INT
);


#创建学生表 
CREATE TABLE XS_AC (
    学号 CHAR(6),
    课程号 CHAR(3),
    成绩 TINYINT,
    学分 INT,
    PRIMARY KEY (学号, 课程号),
    FOREIGN KEY (学号) REFERENCES XS(学号),
    FOREIGN KEY (课程号) REFERENCES KC(课程号)
);

```

`show databases`

![image-20260414171628508](images\思考题5.assets\image-20260414171628508.png) 

`use demo;` 进入数据库

`show tables` 查看进入数据库 下面的表

<img src="images\思考题5.assets\image-20260414171654203.png" alt="image-20260414171654203" style="zoom:50%;" /> 



创建3个表：

<img src="images\思考题5.assets\image-20260414171753214.png" alt="image-20260414171753214" style="zoom:67%;" /> 

<img src="images\思考题5.assets\image-20260414171815131.png" alt="image-20260414171815131" style="zoom:50%;" /> 



#### 插入数据：



```mysql
# 插入学生表数据

INSERT INTO XS (学号, 姓名, 专业名, 性别, 出生时间, 总学分, 备注) VALUES
('081101', '王林', '计算机', 1, '1990-02-10', 50, NULL),
('081102', '程明', '计算机', 1, '1991-02-01', 50, NULL),
('081103', '王燕', '计算机', 0, '1989-10-06', 50, NULL),
('081104', '韦严平', '计算机', 1, '1990-08-26', 50, NULL),
('081106', '李方方', '计算机', 1, '1990-11-20', 50, NULL),
('081107', '李明', '计算机', 1, '1990-05-01', 54, NULL),
('081108', '林一帆', '计算机', 1, '1989-08-05', 52, '提前修完《数据结构》'),
('081109', '张强民', '计算机', 1, '1989-08-11', 50, '已提前修完一门课'),
('081110', '赵琳', '计算机', 0, '1991-07-22', 50, NULL),
('081113', '严红', '通信工程', 0, '1990-03-18', 48, '三好生'),
('081201', '王敏', '通信工程', 1, '1989-06-10', 42, '有一门功课不及格，待补考');

# 插入课程表数据

INSERT INTO KC (课程号, 课程名, 开课学期, 学时, 学分) VALUES
('101', '计算机基础', 1, 68, 5),
('102', '程序设计与语言', 2, 68, 4),
('206', '数据结构', 4, 80, 5),
('208', '离散数学', 4, 68, 4),
('209', '操作系统', 5, 68, 4),
('210', '计算机原理', 6, 68, 4),
('212', '数据库原理', 5, 68, 4),
('301', '计算机网络', 7, 85, 5),
('302', '软件工程', 7, 68, 4);


# 插入成绩表数据：

INSERT INTO XS_AC (学号, 课程号, 成绩, 学分) VALUES
('081101', '101', 80, 5),
('081101', '102', 78, 4),
('081101', '206', 76, 4),
('081102', '102', 78, 4),
('081102', '206', 78, 4),
('081103', '101', 62, 5),
('081103', '102', 70, 4),
('081103', '206', 81, 4);
```

![image-20260414172128760](images\思考题5.assets\image-20260414172128760.png)

![image-20260414172146101](images\思考题5.assets\image-20260414172146101.png)



## 2 环境补充完毕， 开始做题：

```mysql
#查看环境：
use demo;
show tables;
```

<img src="images\思考题5.assets\image-20260414183122761.png" alt="image-20260414183122761" style="zoom:50%;" /> 

1. 查询XS表中各个同学的姓名、专业名和总学分

```mysql
SELECT 姓名, 专业名, 总学分 FROM XS;
#比较简单 不多说了
```

<img src="images\思考题5.assets\image-20260414183249619.png" alt="image-20260414183249619" style="zoom: 67%;" />  

2. 查询XS表中计算机系同学的学号、姓名和总学分，列标题分别指定为 number、name、mark

```mysql
SELECT 学号 AS number, 姓名 AS name, 总学分 AS mark FROM XS WHERE 专业名 = '计算机';
# 使用 AS起别名
```

![image-20260414183752945](images\思考题5.assets\image-20260414183752945.png) 

3. 查询XS表中计算机系同学的学号、姓名和总学分，对总学分进行规则替换

```mysql
SELECT 学号, 姓名,
       CASE
           WHEN 总学分 IS NULL THEN '尚未选课'
           WHEN 总学分 < 50 THEN '不及格'
           WHEN 总学分 BETWEEN 50 AND 52 THEN '合格'
           WHEN 总学分 > 52 THEN '优秀'
       END AS 等级
FROM XS
WHERE 专业名 = '计算机';
# 看上去很多，其实很间的 ，就是简单的判断 ， 按照题目要求即可
```



<img src="images\思考题5.assets\image-20260414184210417.png" alt="image-20260414184210417" style="zoom:67%;" /> 

4. 对XS表只选择专业名和总学分，消除结果集中的重复行

```mysql
SELECT DISTINCT 专业名, 总学分 FROM XS;
# 上面出现过了 ，使用 select distinct 消除结果集中的重复行
```

<img src="images\思考题5.assets\image-20260414184125165.png" alt="image-20260414184125165" style="zoom:67%;" /> 

5. 统计总学分在50分以上的人数

```mysql
SELECT COUNT(*) AS 人数 FROM XS WHERE 总学分 > 50;
#上面 实训5说过
```

![image-20260414184557806](images\思考题5.assets\image-20260414184557806.png) 

6. 求选修101课程的学生的最高分和最低分

```mysql
SELECT MAX(成绩) AS 最高分, MIN(成绩) AS 最低分 FROM XS_AC WHERE 课程号 = '101';
# 也说过拉 ，就是使用 函数 MAX 和MIN 最大和最小 ，在使用 where 进行过滤 课程为 101的
```

![image-20260414184636576](images\思考题5.assets\image-20260414184636576.png) 

7. 求学号081101的学生所学课程的总成绩

```mysql
SELECT SUM(成绩) AS 总成绩 FROM XS_AC WHERE 学号 = '081101';
# 同上 使用了 SUM 函数 计算总和 然后进行 过滤
```

<img src="images\思考题5.assets\image-20260414185012385.png" alt="image-20260414185012385" style="zoom:67%;" /> 

8. 求选修101课程的学生的平均成绩

```mysql
SELECT AVG(成绩) AS 平均成绩 FROM XS_AC WHERE 课程号 = '101';
# AVG 函数 求平均值
```

<img src="images\思考题5.assets\image-20260414185250893.png" alt="image-20260414185250893" style="zoom:67%;" /> 

9. 查询XS表中备注为空的同学的情况

```mysql
SELECT * FROM XS WHERE 备注 IS NULL;
#  核心 ：IS NULL 判断是否为空 这边使用 where进行过滤 ，然后判断 备注 IS NULL 就是判断 备注是不是等于 NULL (为空)
```

![image-20260414185523605](images\思考题5.assets\image-20260414185523605.png) 

10. 查询XS_AC表中102和206课程中大于80分的同学的记录

```mysql
SELECT * FROM XS_AC WHERE 课程号 IN ('102', '206')   AND 成绩 > 80;
# 首先过滤课程号 是否包含 102 和 206，再次判断 ，成绩是否大于 80
```

![image-20260414190028424](images\思考题5.assets\image-20260414190028424.png)



11. 查询XS表中姓“王”的学生学号、姓名及性别

```mysql
SELECT 学号, 姓名, 性别 FROM XS WHERE 姓名 LIKE '王%';
#题目要求 过滤 姓王的同学， 使用 like '王%' 意思就是 王开头 ，%就是所有的意思 ，只需要保诚 王是开头的即可
```



<img src="images\思考题5.assets\image-20260414190327963.png" alt="image-20260414190327963" style="zoom:67%;" /> 

12. 查询XS表中学号倒数第2个数字为0的学生学号、姓名及专业名



```mysql
SELECT 学号, 姓名, 专业名 FROM XS WHERE 学号 LIKE '%0_';
# 这个实训5讲了 ，LIKE '%0_' 我就不重复了 
```

<img src="images\思考题5.assets\image-20260414190343160.png" alt="image-20260414190343160" style="zoom:67%;" /> 

13. 查询XS表中不在1989年出生的学生情况

```mysql
SELECT * FROM XS WHERE YEAR(出生时间) != 1989;
#  YEAR 就是 取日期的年 可以看下面的图， 比如 year('1990-02-10') 执行结果就是 '1990'
```



![image-20260414190551854](images\思考题5.assets\image-20260414190551854.png)







