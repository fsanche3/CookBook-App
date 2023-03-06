const { Router } = require('express');
const recipeController = require('../controllers/recipe');
const errHandler = require('../middleware/errorHandler');
const router = Router();
const multer = require('multer');
const aws = require('../controllers/s3');
require('dotenv').config();

const storage = multer.memoryStorage();
const upload = multer({storage});

router.post('/add_img', upload.single('file'), aws.uploadToBucket);

router.post('/add_recipe', recipeController.addRecipe);

router.get('/:id', recipeController.getById)

router.get('/', recipeController.getAll)

router.get('/random/:type', recipeController.getRandomByType);

router.use(errHandler);

module.exports = router;
