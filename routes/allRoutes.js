import express from "express";
const router = express.Router();
import commentController from "../controllers/conmmentController.js"
router.post("/generateReponse",commentController);
export default router;