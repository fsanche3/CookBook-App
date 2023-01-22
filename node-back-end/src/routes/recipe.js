const { Router } = require('express');
const recipeController = require('../controllers/recipe');
const errHandler = require('../middleware/errorHandler');
const router = Router();
const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3');
require('dotenv').config();

aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    region: process.env.AWS_BUCKET_REGION
});

let s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        acl: "public-read",
        bucket: process.env.AWS_BUCKET_NAME,
        key: function (req, file, cb) {
            cb(null, Date.now() + '--' +file.originalname)
        }
    })
})

router.post('/add_img', upload.single('file'), (req, res, next) => {
    console.log(req.file);
    res.send(req.file.location)
})

router.post('/add_recipe', recipeController.addRecipe);

router.get('/type/:type', recipeController.getByType)

router.get('/:id', recipeController.getById)

router.use(errHandler);

module.exports = router;
