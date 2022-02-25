"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksChargeQuery = exports.tasksGetQuery = exports.tasksQuery = void 0;
var tasksQuery_1 = require("./sql/tasksQuery");
Object.defineProperty(exports, "tasksQuery", { enumerable: true, get: function () { return __importDefault(tasksQuery_1).default; } });
var tasksGetQuery_1 = require("./sql/tasksGetQuery");
Object.defineProperty(exports, "tasksGetQuery", { enumerable: true, get: function () { return __importDefault(tasksGetQuery_1).default; } });
var tasksChargeQuery_1 = require("./sql/tasksChargeQuery");
Object.defineProperty(exports, "tasksChargeQuery", { enumerable: true, get: function () { return __importDefault(tasksChargeQuery_1).default; } });
//# sourceMappingURL=index.js.map