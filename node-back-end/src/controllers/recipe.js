const pool = require('../config/dbConfig');
require('dotenv').config();

let addRecipe = async (req, res, next) =>{
    try{ 
    let {name, description, type, cook_time, 
        img_url, instructions, looks} = req.body; 

    let resp =  
    await pool.query('INSERT INTO recipe (name, description, type, cook_time, img_url, instructions, looks) VALUES($1, $2, $3, $4, $5, $6, $7)',
    [name, description, type, cook_time, img_url, instructions, looks]);

    if(!resp.rowCount){
        throw new Error("Could not insert recipe") ;
    }
        return res.send(resp);

    }catch(err){
        return next(err)    
    }
};

let getByType = async (req, res, next) => {
    try{
    let {type} = req.params;
    let resp = await pool.query('SELECT * FROM RECIPE WHERE type = $1',[type]);

    if(!resp.rowCount){
        throw new Error("Could Not Retrieve Recipes By Type");
    } 
    
    return res.send(resp.rows);

    } catch (err){
        return next(err);
    }
};

let getById = async (req, res, next) => {
    try{
    let {id} = req.params;
    let resp = await pool.query('SELECT * FROM recipe WHERE id = $1',[id]);

    if(!resp.rowCount){
        throw new Error("Could Not Retrieve Recipe By ID");
    }     
    return res.send(resp.rows);

    } catch(err){
        return next(err);
    }
};


module.exports = {addRecipe, getByType, getById};
