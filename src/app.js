import express from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import cors from 'cors'
import morgan from 'morgan';

import authRoutes from './routes/authRoutes';
import transactionsRoutes from './routes/transactionsRoutes';
import userRoutes from './routes/userRoutes';

const app = express(),
    basePathEnv = process.env.API_VERSION,
    basePath = 'api/v1';

config();

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// routes
app.get(`/${basePath}`, (req, res) => {
    console.log('GET REQUEST');
    res.send('GET REQUEST');
});
app.use(`/${basePath}/auth`, authRoutes);
app.use(`/${basePath}/transactions`, transactionsRoutes);
app.use(`/${basePath}/users`, userRoutes);

export default app;
