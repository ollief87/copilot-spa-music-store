import { Request, Response } from 'express';
import musicStoreService from '../services/musicStoreService';

// Index method which returns array of Genre models Disco, Jazz & Rock as JSON
export const index = (req: Request, res: Response) => {
    // Return Genres as JSON from the musicStoreService
    res.json(musicStoreService.getAllGenres())
};

export const browse = (req: Request, res: Response) => {
    // Safely read the genre query parameter and return the value as a string
    const genre = req.query.genre as string;
    
    // HTML encode the genre parameter to prevent XSS attacks
    const genreHtmlEncoded = encodeURI(genre);

    // Return Albums as JSON from the musicStoreService
    res.json(musicStoreService.getAlbumsByGenre(genreHtmlEncoded));
};

// Details method, which reads id from query parameter and returns an album object as JSON.
// The id parameter is required, so we use the required modifier to ensure that the id parameter is always present.
// Album name is concatenated with the id parameter to create a unique album name.
export const details = (req: Request, res: Response) => {
    // Get id from query parameter as integer
    const id = parseInt(req.query.id as string, 10);
    
    // Get album by id from the musicStoreService
    const album = musicStoreService.getAlbumById(id);

    // If album is undefined, return 404
    if (!album) {
        res.sendStatus(404);
        return;
    }

    res.json(album);
};