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
const employeeGetQuery = () => __awaiter(void 0, void 0, void 0, function* () {
    const conn = yield promise_mysql_1.default.createConnection(mysqlConfig_1.default);
    const loginInfoQuery = `SELECT a.id , a.employeeClass , b.pass, d.departmentColor FROM ${tableName_1.default.employeeTable} a INNER JOIN ${tableName_1.default.passTable} b ON a.passId = b.id INNER JOIN belongs c ON a.id = c.employeeId INNER JOIN departments d ON c.departmentId = d.id`;
    try {
        const loginInfo = yield conn.query(loginInfoQuery);
        return loginInfo;
    }
    catch (err) {
        return false;
    }
});
exports.default = employeeGetQuery;
//# sourceMappingURL=employeeGetQuery.js.map