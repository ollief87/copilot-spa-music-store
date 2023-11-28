import express from 'express';
import * as homeController from "../controllers/homeController";

const router = express.Router();

router.get("/", homeController.welcome);

export default router;