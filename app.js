const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const validator = require('validator');

const app = express();
dotenv.config({ path: './config.env' });

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(mongoSanitize());
app.use(helmet());
app.use(hpp());

// Other middleware configurations as needed...

module.exports = app;
