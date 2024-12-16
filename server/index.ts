import express, { Request, Response } from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';

import connectDb from './config/conncetDb';

const app = express();
const PORT = process.env.PORT || 3000;

connectDb();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
