import express from 'express';
import fileRouter from './file';
import linkRouter from './link';

const router = express.Router();

// Use the fileRouter under the base path
router.use('/files', fileRouter);
router.use('/links', linkRouter)
export default router;
