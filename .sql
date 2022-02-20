SELECT * FROM tasks WHERE departmentNo IN (SELECT departmentId FROM belongs WHERE employeeId = 1)) AND taskStatus = 0 AND deadLine >= 2022-2-10

SELECT 
 a.id, b.departmentColor
FROM tasks as a 
INNER JOIN departments as b 
ON a.departmentNo = b.id
WHERE a.taskStatus = 1 AND a.deadLine >= 2022-2-10 

SELECT 


SELECT a.id , a.taskName ,a.taskDetail, a.deadLine , b.departmentColor ,b.departmentName, e.employeeName
FROM tasks as a 
INNER JOIN departments as b 
ON a.departmentNo = b.id 
LEFT OUTER JOIN charge as c
ON a.id = c.taskId
LEFT OUTER JOIN employees as e 
ON c.employeeId = e.id
WHERE a.taskStatus = 0 OR a.taskStatus = 1 AND a.deadLine <= "2022-02-21" 

SELECT employeeName FROM employees WHERE id IN
(SELECT c.employeeId FROM tasks as t
INNER JOIN charge as c
ON t.id = c.taskId)