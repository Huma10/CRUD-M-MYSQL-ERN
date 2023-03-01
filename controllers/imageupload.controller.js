const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1',
    accessKeyId:'AKIAQWRKM6SBCVPZJZ75',
    secretAccessKey:'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',
});

const s3 = new AWS.S3();

exports.uploadImageToS3Bucket = async(req,resp) =>{
    console.log("here >> "+req.body.imageName);
    const BucketName = 'practice-bucket-for-learning';
    const signedUrl = s3.getSignedUrl('put',{
        Key: req.body.imageName,
        Bucket: BucketName,
        Body: req.file.buffer
    });
    console.log('uploaded >>> '+signedUrl);
}