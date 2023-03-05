const { Router } = require('express');
const ingredientController = require('../controllers/ingredients');
const errHandler = require('../middleware/errorHandler');
const router = Router();
require('dotenv').config();


router.get('/recipe/:name', ingredientController.getRecipesIngredients);

router.post('/multi', ingredientController.addMultipleIngredients);

router.post('/:name', ingredientController.addIngredient);

router.use(errHandler);

module.exports = router;