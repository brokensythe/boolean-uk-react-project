"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./resources/Auth/routes"));
const routes_2 = __importDefault(require("./resources/Users/routes"));
const cors_1 = __importDefault(require("cors"));
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require("dotenv").config();
const app = express_1.default();
app.use(cors_1.default({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(logger('dev'));
app.use(express_1.default.json());
app.use(cookieParser());
app.use(routes_1.default);
app.use("/users", routes_2.default);
app.all("*", (req, res) => {
    res.status(404).send("<h1>Better Luck Next Time</h1>");
});
module.exports = app;
