import { Artist } from "./artist";
import { Genre } from "./genre";

// Album model with title string property and genre Genre property
export interface Album {
    // albumId, genreId, artistId of type integer
    albumId: number;
    genreId: number;
    artistId: number;
    title: string;
    price: number;
    albumArtUrl: string;
    genre?: Genre;
    artist?: Artist;
}