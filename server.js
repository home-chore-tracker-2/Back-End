const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('./auth/authenticate-middleware.js');
const authRouter = require('./auth/auth-router');
const userRouter = require('./user/user-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/user', userRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: "Up and running!", dbenv: process.env.DB_ENV });
});

module.exports = server;