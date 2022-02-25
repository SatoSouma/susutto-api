"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const mysqlConfig_1 = __importDefault(require("./mysqlConfig"));
const tableName_1 = __importDefault(require("./tableName"));
const tasksGetAdminQuery = (nowDate) => __awaiter(void 0, void 0, void 0, function* () {
    const conn = yield promise_mysql_1.default.createConnection(mysqlConfig_1.default);
    const taskDoingQuery = `SELECT a.id , a.taskName ,a.taskDetail, a.deadLine , b.departmentColor ,b.departmentName, e.employeeName FROM ${tableName_1.default.taskTable} as a INNER JOIN ${tableName_1.default.departmentTable} as b ON a.departmentNo = b.id INNER JOIN ${tableName_1.default.chargeTable} as c ON a.id = c.taskId INNER JOIN ${tableName_1.default.employeeTable} as e ON e.id = c.employeeId WHERE a.taskStatus = 1 AND a.deadLine >= ?`;
    const taskDoingValue = [nowDate];
    const taskTodoQuery = `SELECT a.id , a.taskName ,a.taskDetail, a.deadLine , b.departmentColor ,b.departmentName FROM ${tableName_1.default.taskTable} as a INNER JOIN ${tableName_1.default.departmentTable} as b ON a.departmentNo = b.id WHERE a.deadLine >= ? AND a.taskStatus = 0 `;
    const taskTodoValue = [nowDate];
    const taskDoneQuery = `SELECT a.id , a.taskName ,a.taskDetail, a.deadLine , b.departmentColor ,b.departmentName, e.employeeName FROM ${tableName_1.default.taskTable} as a INNER JOIN ${tableName_1.default.departmentTable} as b ON a.departmentNo = b.id INNER JOIN ${tableName_1.default.chargeTable} as c ON a.id = c.taskId INNER JOIN ${tableName_1.default.employeeTable} as e ON e.id = c.employeeId WHERE a.taskStatus = 2`;
    const taskNoAchieveQuery = `SELECT a.id , a.taskName ,a.taskDetail, a.deadLine , b.departmentColor ,b.departmentName, e.employeeName FROM ${tableName_1.default.taskTable} as a INNER JOIN ${tableName_1.default.departmentTable} as b ON a.departmentNo = b.id LEFT OUTER JOIN ${tableName_1.default.chargeTable} as c ON a.id = c.taskId LEFT OUTER JOIN ${tableName_1.default.employeeTable} as e ON c.employeeId = e.id WHERE a.deadLine <= ? AND (a.taskStatus <> 2 ) `;
    const taskNoAhieveValue = [nowDate];
    try {
        const doing = yield conn.query(taskDoingQuery, taskDoingValue);
        const todo = yield conn.query(taskTodoQuery, taskTodoValue);
        const done = yield conn.query(taskDoneQuery);
        const noAchieve = yield conn.query(taskNoAchieveQuery, taskNoAhieveValue);
        const tasks = {
            doing: doing,
            todo: todo,
            done: done,
            noAchieve: noAchieve,
        };
        return tasks;
    }
    catch (err) {
        return false;
    }
});
exports.default = tasksGetAdminQuery;
//# sourceMappingURL=tasksGetAdminQuery.js.map