"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskController_1 = __importDefault(require("../controller/taskController"));
const router = express_1.default.Router();
router.get('/', taskController_1.default.index);
router.post('/create', taskController_1.default.store);
router.get('/getAllTask', taskController_1.default.getTasks);
router.put('/taskCharge', taskController_1.default.putCharge);
router.put('/putStatus', taskController_1.default.updateStatus);
router.get('/getAdminTask', taskController_1.default.getAdminTasks);
router.post('/login', taskController_1.default.login);
router.post('/adminLogin', taskController_1.default.adminLogin);
router.put('/taskFix', taskController_1.default.taskFix);
exports.default = router;
//# sourceMappingURL=tasks.js.map