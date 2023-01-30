const { Router } = require('express');
const ingredientController = require('../controllers/ingredients');
const errHandler = require('../middleware/errorHandler');
const router = Router();
require('dotenv').config();

router.get('/', ingredientController.getIngredients);

//get all ingredients from recipe_ingredients using recipe id
router.get('/recipe/:id');

// Add to many-many table recipe/ingredients(s) and qauntity/unit;
router.post('/')


router.post('/:name', ingredientController.addIngredient);

router.use(errHandler);

module.exports = router;