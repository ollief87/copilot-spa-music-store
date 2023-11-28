// src/routes/storeRoutes.ts
import express from 'express';
import * as storeController from '../controllers/storeController';

const router = express.Router();

router.get('/genres', storeController.getGenres);
router.get('/genres/:genreName/albums', storeController.getAlbumsByGenreName);
router.get('/albums/:albumId', storeController.getAlbumById);

export default router;