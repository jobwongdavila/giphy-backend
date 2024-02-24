import express, { Application } from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import cors from 'cors';

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use('/', routes);

export default app;
