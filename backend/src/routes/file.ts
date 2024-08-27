import express from 'express';
import { upload } from '../middlewares/multer.middleware';  // Ensure path is correct
import { uploadOnCloudinary } from '../utils/cloudinary';  // Ensure path is correct

const router = express.Router();

router.post('/upload', upload.single('file'), async (req: express.Request, res: express.Response) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    const localFilePath = req.file.path;

    try {
        const result = await uploadOnCloudinary(localFilePath, res);
        return res.json({ message: 'File uploaded successfully', url: result });
    } catch (error) {
        return res.status(500).json({ message: 'Error uploading file to Cloudinary', error });
    }
});

router.get('/test', (req, res) => {
    res.send('File router is working!');
});

export default router;
