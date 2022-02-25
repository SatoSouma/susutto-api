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
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const index_1 = require("./index");
const tasksStatusUpQuery_1 = __importDefault(require("./sql/tasksStatusUpQuery"));
const tasksGetAdminQuery_1 = __importDefault(require("./sql/tasksGetAdminQuery"));
const employeeGetQuery_1 = __importDefault(require("./sql/employeeGetQuery"));
const taskFixQuery_1 = __importDefault(require("./sql/taskFixQuery"));
moment_timezone_1.default.tz.setDefault('Asia/Tokyo');
const tasks = {
    create(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const taskName = form.taskName;
            const taskDetail = form.taskDetail;
            const deadLine = form.deadLine;
            const departmentId = form.department;
            const nowDate = (0, moment_timezone_1.default)().format('YYYY-MM-DD');
            const result = yield (0, index_1.tasksQuery)(taskName, taskDetail, deadLine, nowDate, departmentId);
            return result;
        });
    },
    getTasks(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const nowDate = (0, moment_timezone_1.default)().format('YYYY-MM-DD HH:mm:ss');
            const result = yield (0, index_1.tasksGetQuery)(id, nowDate);
            return result;
        });
    },
    putCharge(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const taskId = form.taskId;
            console.log(taskId);
            const employeeId = form.employeeId;
            const nowDate = (0, moment_timezone_1.default)().format('YYYY-MM-DD');
            const result = yield (0, index_1.tasksChargeQuery)(taskId, employeeId, nowDate);
            return result;
        });
    },
    statusUp(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const taskId = form.taskId;
            const result = yield (0, tasksStatusUpQuery_1.default)(taskId);
            return result;
        });
    },
    getAdminTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            const nowDate = (0, moment_timezone_1.default)().format('YYYY-MM-DD HH:mm:ss');
            const result = yield (0, tasksGetAdminQuery_1.default)(nowDate);
            return result;
        });
    },
    login(id, pass) {
        return __awaiter(this, void 0, void 0, function* () {
            let loginFlug = false;
            let departmentColor = '';
            const loginInfo = yield (0, employeeGetQuery_1.default)();
            console.log(loginInfo);
            loginInfo.map((val) => {
                if (val.id == id) {
                    if (val.pass == pass) {
                        console.log('ログイン成功');
                        departmentColor = val.departmentColor;
                        loginFlug = true;
                    }
                }
            });
            if (loginFlug) {
                const color = { departmentColor: departmentColor };
                return color;
            }
            else {
                return false;
            }
        });
    },
    AdminLogin(id, pass) {
        return __awaiter(this, void 0, void 0, function* () {
            let loginFlug = false;
            const loginInfo = yield (0, employeeGetQuery_1.default)();
            console.log(loginInfo);
            loginInfo.map((val) => {
                if (val.id == id) {
                    if (val.pass == pass) {
                        if (val.employeeClass == 1) {
                            loginFlug = true;
                        }
                    }
                }
            });
            if (loginFlug) {
                return true;
            }
            else {
                return false;
            }
        });
    },
    taskFix(form) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(form);
            const id = form.id;
            const taskDetail = form.taskDetail;
            const deadLine = form.deadLine;
            const nowDate = (0, moment_timezone_1.default)().format('YYYY-MM-DD HH:mm:ss');
            const result = yield (0, taskFixQuery_1.default)(id, taskDetail, deadLine, nowDate);
            return result;
        });
    },
};
exports.default = tasks;
//# sourceMappingURL=tasks.js.map