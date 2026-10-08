import express from "express";
import { generateUploadSignture } from '../middleware/cloudinary.js';
import {createNewLevel,updateLevel,getLevelById} from "../controllers/controlePanelController.js"

const router = express.Router();
// 1. Signature route for Cloudinary
router.get('/generate-upload-signature',generateUploadSignture );
router.get('/level/:levelId',getLevelById)
router.post('/create',createNewLevel)
router.put('/update/:levelId',updateLevel)

export default router;