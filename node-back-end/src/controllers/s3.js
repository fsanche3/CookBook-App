const S3 = require('aws-sdk/clients/s3')
require('dotenv').config();

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey
})


let uploadToBucket = async (req, res, next) => {
try {

    const uploadParams = {
        Bucket: bucketName,
        Body:  req.file.buffer,
        Key: Date.now() +'---'+req.file.originalname
      }

      let resp = await s3.upload(uploadParams).promise();

    return res.send(resp.Location);

    } catch (err) {
    
        return next(err);
        }
}

module.exports = {uploadToBucket};
