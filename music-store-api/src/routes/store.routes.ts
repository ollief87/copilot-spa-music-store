// src/routes/storeRoutes.ts
import express from 'express';
import * as storeController from '../controllers/store.controller';

const router = express.Router();

router.get('/', storeController.index);
router.get('/browse', storeController.browse);
router.get('/details', storeController.details);

export default router;