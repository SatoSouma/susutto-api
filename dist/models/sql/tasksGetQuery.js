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
const tasksGetQuery = (id, nowDate) => __awaiter(void 0, void 0, void 0, function* () {
    const conn = yield promise_mysql_1.default.createConnection(mysqlConfig_1.default);
    const allTaskGetQuery = `SELECT * FROM ${tableName_1.default.taskTable} WHERE departmentNo IN (SELECT departmentId FROM ${tableName_1.default.belongTable} WHERE employeeId = ?) AND taskStatus = 0 AND deadLine >= ? `;
    const allTaskGetValue = [id, nowDate];
    const myTaskGetQuery = `SELECT * FROM ${tableName_1.default.taskTable} WHERE id IN (SELECT taskId FROM ${tableName_1.default.chargeTable} WHERE employeeId = ?) AND taskStatus = 1 AND deadLine >= ?`;
    const myTaskGetValue = [id, nowDate];
    try {
        const allTask = yield conn.query(allTaskGetQuery, allTaskGetValue);
        const myTask = yield conn.query(myTaskGetQuery, myTaskGetValue);
        const tasks = {
            myTask: myTask,
            allTask: allTask,
        };
        return tasks;
    }
    catch (err) {
        return false;
    }
});
exports.default = tasksGetQuery;
//# sourceMappingURL=tasksGetQuery.js.map