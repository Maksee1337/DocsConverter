import express from 'express';
const router = express.Router();
import converterController from './converter.controller.js';

router.route('/convert')
  .post(converterController.ConvertFile)


export = router;
