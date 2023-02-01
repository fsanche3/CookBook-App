const { Router } = require('express');
const ingredientController = require('../controllers/ingredients');
const errHandler = require('../middleware/errorHandler');
const router = Router();
require('dotenv').config();

router.get('/', ingredientController.getIngredients);

router.get('/recipe/:id', ingredientController.getRecipesIngredients);

router.post('/', ingredientController.addRecipeIngredient);

router.post('/:name', ingredientController.addIngredient);

router.use(errHandler);

module.exports = router;