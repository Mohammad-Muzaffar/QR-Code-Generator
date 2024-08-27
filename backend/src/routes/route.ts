import express from 'express';
import fileRouter from './file';

const router = express.Router();

// Use the fileRouter under the base path
router.use('/', fileRouter);

export default router;
