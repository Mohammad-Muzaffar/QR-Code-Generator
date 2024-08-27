import express from 'express';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import * as dotenv from 'dotenv';
dotenv.config();

export const uploadOnCloudinary = async (localFilePath: string, res: express.Response) => {
    try {
            await cloudinary.config({ 
                cloud_name: process.env.CLOUD_NAME, 
                api_key: process.env.API_KEY, 
                api_secret: process.env.API_SECRET 
            });

        if (!localFilePath) {
            return res.status(406).json({
                message: "No file path found"
            });
        }

        // Check if the file exists before uploading
        if (!fs.existsSync(localFilePath)) {
            return res.status(404).json({
                message: "File not found"
            });
        }

        const uploadResult = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });

        // Delete the local file after upload
        fs.unlinkSync(localFilePath);

        return uploadResult.url;
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: e
        });
    }
}
