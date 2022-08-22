import express from 'express';
import FileController from './file.controller';
const router = express.Router();

router.route('/upload')
    .post(FileController.UploadFile)

export = router;
