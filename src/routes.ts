import express from 'express';
const router = express.Router()
import converterRoutes from './modules/converter/converter.routes';
import fileRoutes from './modules/file/file.routes'

router.use('/converter', converterRoutes);
router.use('/file', fileRoutes);

export = router;
