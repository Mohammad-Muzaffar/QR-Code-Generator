import express from 'express';
import QRCode from 'qrcode';

const router = express.Router();

router.post('/upload', async (req: express.Request, res: express.Response) => {
    if (!req.body.url) {
        return res.status(400).json({ message: 'No URL found' });
    }

    const url = req.body.url;

    try {
        const qrCodeData = await QRCode.toDataURL(url);

        return res.json({ 
            message: 'QR generated from url successfully', 
            url: url,
            qrCode: qrCodeData});

    } catch (error) {
        return res.status(500).json({ message: 'Error uploading file to Cloudinary', error });
    }
});

router.get('/test', (req, res) => {
    res.send('File router is working!');
});

export default router;
