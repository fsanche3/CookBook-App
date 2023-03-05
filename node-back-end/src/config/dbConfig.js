require("dotenv").config();
const {Pool} = require('pg');
const pgp = require('pg-promise')({
    /* initialization options */
    capSQL: true // capitalize all generated SQL
});

const db = pgp(`postgres://${process.env.USER}:${process.env.PASS}@${process.env.HOST}:5432/${process.env.DB}`);

const pool = new Pool ({
host: process.env.HOST,
user: process.env.USER,
database: process.env.DB,
password: process.env.PASS,
max: 20, 
idleTimeoutMillis: 300000,
connectionTimeoutMillis: 2000
})



module.exports = {pool, db};