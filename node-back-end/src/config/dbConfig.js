const {Pool} = require('pg');
require("dotenv").config();

const pool = new Pool ({
host: process.env.HOST,
user: process.env.USER,
database: process.env.DB,
password: process.env.PASS,
max: 20, 
idleTimeoutMillis: 300000,
connectionTimeoutMillis: 2000
})

module.exports = pool;