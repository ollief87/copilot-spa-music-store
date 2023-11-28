// src/controllers/storeController.ts
import { Request, Response } from 'express';
import musicStoreService from '../services/musicStoreService';

// GET /genres
export const getGenres = (req: Request, res: Response) => {
    res.json(musicStoreService.getAllGenres());
};

// GET /genres/:genreName/albums
export const getAlbumsByGenreName = (req: Request, res: Response) => {
    const genreName = req.params.genreName;
    res.json(musicStoreService.getAlbumsByGenreName(genreName));
};

// GET /albums/:albumId
export const getAlbumById = (req: Request, res: Response) => {
    const albumId = parseInt(req.params.albumId, 10);
    const album = musicStoreService.getAlbumById(albumId);

    if (!album) {
        res.sendStatus(404);
        return;
    }

    res.json(album);
};