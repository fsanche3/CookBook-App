const {pool, db} = require('../config/dbConfig');
const pgp = require('pg-promise')({});
require('dotenv').config();

let addIngredient = async (req, res, next) => {
    try{
        
        let {name, quantity, recipe_name} = req.params;
        let resp = await pool.query('INSERT INTO ingredients (name, quantity, recipe_name) VALUES ($1)',[name, quantity, recipe_name]);

        return res.send(resp);
    } catch(err){
        return next(err);
    }
}

let addMultipleIngredients = async (req, res, next) => {
    try{

        let ingredientList = req.body;
        let cache = new pgp.helpers.ColumnSet(['name', 'quantity', 'recipe_name'], {table: 'ingredients'});

        let query = pgp.helpers.insert(ingredientList,cache)
        let resp = await db.none(query);

        return res.send(resp);

    } catch(err){
        return next(err);
    }
}

let getRecipesIngredients = async (req, res, next) => {
    try{
        let {name} = req.params;
        
        let resp = 
        await pool.query('SELECT name, quantity, recipe_name FROM ingredients WHERE recipe_name = $1', [name]);

        return res.send(resp.rows);
    }catch (err){
        return next(err);
    }
}

module.exports = {addIngredient, addMultipleIngredients,getRecipesIngredients};