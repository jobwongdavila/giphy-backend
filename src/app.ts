import express, { Application } from 'express';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app: Application = express();

app.use(routes);

export default app;
