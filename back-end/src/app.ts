import express from 'express'
import authRouter from './resources/Auth/routes';
import userRouter from './resources/Users/routes';
import cors from "cors"
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require("dotenv").config();

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(authRouter)
app.use("/users", userRouter)


app.all("*", (req, res)=>{
    res.status(404).send("<h1>Better Luck Next Time</h1>")
})

module.exports = app;
