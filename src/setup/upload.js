// Imports
import path from 'path'
import multer from 'multer'
import aws from 'aws-sdk';
import multerS3 from 'multer-s3';

// App Imports
import serverConfig from '../config/server.json'

// File upload configurations and route
export default function (server) {
  const accessKeyId = 'JBJNUK8T04U1HIV3STZQ';
const secretAccessKey = 'eFbmc8AviLQeegvRcDD4pen8WE5ubV9Olc6uK8IR';


const wasabiEndpoint = new aws.Endpoint('s3.wasabisys.com');

// Set S3 endpoint to Wasabi
const s3 = new aws.S3({
  endpoint: wasabiEndpoint,
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey
});

  console.info('SETUP - Upload...')

  // Set destination
  const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'needpam-user-files/images/uploads',
    acl: 'public-read',
    key: function (request, file, cb) {
      console.log(file);
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  })
}).single('file');


  // Upload route
  server.post(serverConfig.upload.endpoint, (request, response, next) => {
    upload(request, response, function (error) {
      if (!error) {
        response.json({
          success: true,
          file: request.file.key
        })
      } else {
        response.json({
          success: false,
          file: null
        })
      }
    })
  })
}
