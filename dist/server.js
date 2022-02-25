'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tasks_1 = __importDefault(require("./routes/tasks"));
const body_parser_1 = __importDefault(require("body-parser"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const socketConnect_1 = require("./socket/socketConnect");
const PORT = 8080;
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.default.Server(server, {
    cors: {
        origin: '*',
        methods: '*',
        allowedHeaders: '*',
    },
});
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});
app.use(body_parser_1.default.json());
app.use(tasks_1.default);
io.on('connection', (socket) => {
    console.log('connect');
    (0, socketConnect_1.socketChargeUpdate)(socket);
    (0, socketConnect_1.socketTaskCreate)(socket);
    (0, socketConnect_1.socketTaskUpdate)(socket);
    (0, socketConnect_1.socketTaskFix)(socket);
});
server.listen(PORT);
console.log(`Running on http://${PORT}`);
//# sourceMappingURL=server.js.map