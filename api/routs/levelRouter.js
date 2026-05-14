import express from "express";
import levelController from "../controllers/levelController.js";
//const levelController = require("../controllers/levelController.js");

const levelRouter = express.Router();

levelRouter.get('/levels',levelController.getLevelList);
levelRouter.post('/startGame', levelController.createSession);
export default levelRouter;