import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors'
import morgan from 'morgan';

const app = express(),
basePath = process.env.API_VERSION;

dotenv.config();

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// routes
app.get('/', (req, res) => {
    console.log('GET REQUEST');
    res.send('GET REQUEST');
});

export default app;
