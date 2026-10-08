import express from "express";
import { generateUploadSignture } from '../middleware/cloudinary.js';

const router = express.Router();
// 1. Signature route for Cloudinary
router.get('/generate-upload-signature',generateUploadSignture );

export default router;