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
const tasks_1 = __importDefault(require("../models/tasks"));
const taskController = {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send('Hello world');
        });
    },
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('通過');
            const formData = req.body;
            const results = yield tasks_1.default.create(formData);
            res.send(results);
        });
    },
    getTasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('通過');
            const id = req.query.id;
            const results = yield tasks_1.default.getTasks(id);
            res.send(results);
        });
    },
    putCharge(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const formData = req.body;
            const results = yield tasks_1.default.putCharge(formData);
            res.send(results);
        });
    },
    updateStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const formData = req.body;
            const results = yield tasks_1.default.statusUp(formData);
            res.send(results);
        });
    },
    getAdminTasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('通過');
            const results = yield tasks_1.default.getAdminTasks();
            res.send(results);
        });
    },
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield tasks_1.default.login(req.body.userId, req.body.pass);
            res.send(results);
        });
    },
    adminLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield tasks_1.default.AdminLogin(req.body.userId, req.body.pass);
            res.send(results);
        });
    },
    taskFix(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const formData = req.body;
            const results = yield tasks_1.default.taskFix(formData);
            res.send(results);
        });
    },
};
exports.default = taskController;
//# sourceMappingURL=taskController.js.map