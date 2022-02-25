"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketTaskFix = exports.socketTaskUpdate = exports.socketTaskCreate = exports.socketChargeUpdate = void 0;
const tasks_1 = __importDefault(require("../models/tasks"));
function socketChargeUpdate(socket) {
    socket.on('chup', (data) => {
        console.log('chup 通過');
        console.log(data);
        try {
            tasks_1.default.putCharge(data);
            socket.emit('chResult', { message: true });
        }
        catch (_a) {
            socket.emit('chResult', { message: false });
        }
    });
}
exports.socketChargeUpdate = socketChargeUpdate;
function socketTaskCreate(socket) {
    socket.on('crtask', (data) => {
        console.log('crtask');
        try {
            tasks_1.default.create(data);
            socket.emit('crResult', { message: true });
        }
        catch (_a) {
            socket.emit('crResult', { message: false });
        }
    });
}
exports.socketTaskCreate = socketTaskCreate;
function socketTaskUpdate(socket) {
    socket.on('taskup', (data) => {
        console.log('status変更');
        console.log(data);
        try {
            tasks_1.default.statusUp(data);
            socket.emit('chResult', { message: true });
        }
        catch (_a) {
            socket.emit('chResult', { message: false });
        }
    });
}
exports.socketTaskUpdate = socketTaskUpdate;
function socketTaskFix(socket) {
    socket.on('uptask', (data) => {
        console.log('uptask');
        console.log(data);
        try {
            tasks_1.default.taskFix(data);
            socket.emit('crResult', { message: true });
        }
        catch (_a) {
            socket.emit('crResult', { message: false });
        }
    });
}
exports.socketTaskFix = socketTaskFix;
//# sourceMappingURL=socketConnect.js.map