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
const promise_1 = __importDefault(require("mysql2/promise"));
const mysqlConfig_1 = __importDefault(require("./mysqlConfig"));
const tableName_1 = __importDefault(require("./tableName"));
const tasksQuery = (taskName, taskDetail, deadLine, nowDate, departmentId) => __awaiter(void 0, void 0, void 0, function* () {
    const conn = yield promise_1.default.createConnection(mysqlConfig_1.default);
    const taskQuery = `INSERT INTO ${tableName_1.default.taskTable} (departmentNo,taskName,taskDetail,deadLine) VALUES (?, ?, ?, ?)`;
    const taskValues = [departmentId, taskName, taskDetail, deadLine];
    try {
        yield conn.execute(taskQuery, taskValues);
        return true;
    }
    catch (err) {
        return false;
    }
});
exports.default = tasksQuery;
//# sourceMappingURL=tasksQuery.js.map