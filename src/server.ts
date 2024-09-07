import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.post('/api/message', (req, res) => {
    const { testMessage } = req.body;
    const reply = `server ${testMessage}`;
    res.json({ reply });
});

app.listen(port, () => {
    console.log(`sever is running at http://localhost:${port}`);
});