const pool = require('../config/dbConfig');
require('dotenv').config();

let addIngredient = async (req, res, next) => {
    try{
        
        let {name} = req.params;
        let resp = await pool.query('INSERT INTO ingredients (name) VALUES ($1)',[name]);

        return res.send(resp);
    } catch(err){
        return next(err);
    }
}

let getIngredients = async (req, res, next) => {
    try{
         let resp = await pool.query('SELECT id, name FROM ingredients');
         return res.send(resp.rows);
    } catch(err){
        return next(err);
    }
}

module.exports = {getIngredients, addIngredient};