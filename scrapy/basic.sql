-- Create a new table called 'stu' in schema 'SchemaName'
-- Drop the table if it already exists
-- Create the table in the specified schema
CREATE TABLE stu(
    snum INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    sname VARCHAR(50) NOT NULL,
    sage INT NOT NULL,
    sclass VARCHAR(10) NOT NULL
);
-- DROP TABLE stu;
-- insert
INSERT INTO stu(sname, sage, sclass)
VALUES('hzh', 19, '2216');
INSERT INTO stu(sname, sage, sclass)
VALUES('zzk', 18, '2216');
INSERT INTO stu(sname, sage, sclass)
VALUES('zjl', 19, '2217');
INSERT INTO stu(sname, sage, sclass)
VALUES('xhw', 20, '2218');
-- delete syntax, 一定要加条件
DELETE FROM stu
WHERE sage = 18;
-- modify data
UPDATE stu
SET sage = 79,
    sname = 'asd'
WHERE snum = 3;
-- find
SELECT *
FROM stu;
-- 重新命名as,在本地不是在数据库
SELECT sname AS `name`,
    sage AS `age`
FROM stu;
SELECT *
FROM stu
WHERE sage > 19;
-- 不等于!=,<>
SELECT *
FROM stu
WHERE sage != 18;
-- between
SELECT *
FROM stu
WHERE sage BETWEEN 10 AND 20;
-- 符合其中一个
SELECT *
FROM stu
WHERE sage IN (10, 20);
-- 开头是z
SELECT *
FROM stu
WHERE sname LIKE 'z%';
SELECT *
FROM stu
WHERE sage = 19
    OR sage = 20;
-- 聚合函数
SELECT sclass,
    AVG(sage)
FROM stu
GROUP BY sclass;
SELECT sage,
    count(*)
FROM stu
GROUP BY sage;
-- having 筛选完再判断,where直接筛选
SELECT sage,
    sclass,
    count(*)
FROM stu
GROUP BY sage,
    sclass
HAVING AVG(sage) > 18;
-- sort
SELECT *
FROM stu
ORDER BY sage DESC;
-- limit,3
SELECT *
FROM stu
LIMIT 3;
-- 从第几条开始选几条
SELECT *
FROM stu
LIMIT 3, 3;
SELECT *
FROM caipiao