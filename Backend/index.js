import express from 'express';
import { configDotenv } from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import authRouter from './routes/auth.js';

configDotenv();

const PORT = process.env.PORT || 8000;

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//Routes
app.get('/', (req, res) => {console.log('root path'); res.send('server is running')});
app.use('/auth', authRouter);

//DB connection
const db = process.env.DB;
mongoose.connect(db)
.then(() => {console.log('database connection established!')})
.catch(err => console.log(err));

//SERVER
app.listen(PORT, () => {console.log(`connected to server ON port ${PORT}`);})