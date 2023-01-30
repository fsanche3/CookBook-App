const express = require('express');
let routes = require('./src/routes/index');
const cors = require('cors');
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',(req, res, next) =>{
    res.send("Server started");
})

app.use('/recipe', routes.recipeRoute);
app.use('/ingredients', routes.ingredientRoute);

app.listen(process.env.PORT, () => {
    console.log("Server started on port: "+ process.env.PORT)
})