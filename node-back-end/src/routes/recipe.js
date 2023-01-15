const { Router } = require('express');
const router = Router();
const errHandler = require('../middleware/errorHandler');
const pool = require('../config/dbConfig');
const fs = require('fs');
const S3 = require('aws-sdk/clients/s3');
require('dotenv').config();


router.post('/add_recipe', async (req, res, next) =>{
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

router.post('/add_img', async (req, res, next) => {
    try{
        /*
        let s3 = new S3(
            process.env.AWS_BUCKET_REGION,
            process.env.AWS_ACCESS_KEY,
            process.env.AWS_SECRET_KEY
        );
        */
        console.log(req.files)
        return res.send("CHECk")
        /*
        let uploadParameters = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Body: Buffer.from(req.file.stream),
            Key: req.file.name
        }

        let verify = await s3.upload(uploadParameters).promise();
        */
        if(!verify){
            throw new Error("Image Upload Unsuccessful");
        }

        return verify; 

    } catch (err){
        return next(err);
    }
})

router.get('/get_by_type/:type', async (req, res, next) => {
    try{
    let {type} = req.params;
    let resp = await pool.query('SELECT * FROM RECIPE WHERE type = $1',[type]);

    if(!resp.rowCount){
        throw new Error("Could Not Retrieve Recipes By Type");
    } 
    
    return res.send(resp);

    } catch (err){
        return next(err);
    }
})

router.get('/:id', async (req, res, next) => {
    try{
    let {id} = req.params;
    let resp = await pool.query('SELECT * FROM recipe WHERE id = $1',[id]);

    if(!resp.rowCount){
        throw new Error("Could Not Retrieve Recipe By ID");
    }     
    return res.send(resp);

    } catch(err){
        return next(err);
    }
})

router.use(errHandler);

module.exports = router;
