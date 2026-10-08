import express from "express";
import { generateUploadSignture } from '../middleware/cloudinary.js';
import {createNewLevel} from "../controllers/controlePanelController.js"

const router = express.Router();
// 1. Signature route for Cloudinary
router.get('/generate-upload-signature',generateUploadSignture );
router.post('/create',createNewLevel)

export default router;