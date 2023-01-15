const express = require('express');
const app = express();
const db = require('./src/config/dbConfig')
let recipe = require('./src/routes/recipe');
require("dotenv").config();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',(req, res, next) =>{
    res.send("Server started");
})

app.use('/recipe', recipe);

app.listen(process.env.PORT, () => {
    console.log("Server started on port: "+ process.env.PORT)
})