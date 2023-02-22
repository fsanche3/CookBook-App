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

let getRecipesIngredients = async (req, res, next) => {
    try{
        let {id} = req.params;
        
        let resp = 
        await pool.query('SELECT ingredient_id, quantity, quantity_unit, ingredient_name FROM ingredients_recipes WHERE recipe_id = $1', [id]);

        return res.send(resp.rows);
    }catch (err){
        return next(err);
    }
}

let addRecipeIngredient = async (req, res, next) => {
    try{
        let {recipe_id, ingredient_id, quantity, quantity_unit, ingredient_name} = req.body;
        let resp = 
        await pool.query('INSERT INTO ingredients_recipes (recipe_id, ingredient_id, quantity, quantity_unit, ingredient_name) VALUES ($1, $2, $3, $4, $5)',
        [recipe_id, ingredient_id, quantity, quantity_unit, ingredient_name]);

        return res.send(resp);
    }catch (err){
        return next(err);
    }
}

module.exports = {getIngredients, addIngredient, getRecipesIngredients, addRecipeIngredient};