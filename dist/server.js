"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/index.html'));
});
app.post('/api/message', (req, res) => {
    const { testMessage } = req.body;
    const reply = `server ${testMessage}`;
    res.json({ reply });
});
app.post('/api/time', (req, res) => {
    const currentTime = new Date().toLocaleString();
    res.json({ reply: `現在の時刻: ${currentTime}` });
});
app.listen(port, () => {
    console.log(`sever is running at http://localhost:${port}`);
});
