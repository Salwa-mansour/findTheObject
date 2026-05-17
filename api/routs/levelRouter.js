import express from "express";
import levelController from "../controllers/levelController.js";
//const levelController = require("../controllers/levelController.js");

const levelRouter = express.Router();

levelRouter.get('/levels',levelController.getLevelList);
levelRouter.post('/startGame', levelController.createSession);
levelRouter.post('/checkHit', levelController.checkPointHit);
levelRouter.post('/endGame', levelController.endSession);
export default levelRouter;