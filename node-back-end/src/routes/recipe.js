const { Router } = require('express');
const router = Router();
const errHandler = require('../middleware/errorHandler');
const pool = require('../config/dbConfig');

router.post('/add', async (req, res, next) =>{
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
})

router.use(errHandler);

module.exports = router;
