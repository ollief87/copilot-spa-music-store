// Music Store Service
// Methods for GetAllGenres, GetAlbumsByGenre and GetAlbumById

import { Album } from "../models/album";
import { Genre } from "../models/genre";

// Mocked genres with GenreId and Name properties
const genres: Genre[] = [
    { genreId: 1, name: 'Disco' },
    { genreId: 2, name: 'Jazz' },
    { genreId: 3, name: 'Rock' }
];

// Mocked albums with AlbumId, ArtistId, GenreId, Title, Price & AlbumArtUrl properties
// Also include a mocked Artist & Genre model for each album
const albums: Album[] = [
    {
        albumId: 1,
        artistId: 1,
        genreId: 1,
        title: 'Album 1',
        price: 9.99,
        albumArtUrl: 'https://via.placeholder.com/350x150',
        artist: {
            artistId: 1,
            name: 'Artist 1'
        },
        genre: {
            genreId: 1,
            name: 'Disco'
        }
    },
    {
        albumId: 2,
        artistId: 2,
        genreId: 1,
        title: 'Album 2',
        price: 9.99,
        albumArtUrl: 'https://via.placeholder.com/350x150',
        artist: {
            artistId: 2,
            name: 'Artist 2'
        },
        genre: {
            genreId: 1,
            name: 'Disco'
        }
    },
    {
        albumId: 3,
        artistId: 3,
        genreId: 1,
        title: 'Album 3',
        price: 9.99,
        albumArtUrl: 'https://via.placeholder.com/350x150',
        artist: {
            artistId: 3,
            name: 'Artist 3'
        },
        genre: {
            genreId: 1,
            name: 'Disco'
        }
    },
    {
        albumId: 4,
        artistId: 4,
        genreId: 2,
        title: 'Album 4',
        price: 9.99,
        albumArtUrl: 'https://via.placeholder.com/350x150',
        artist: {
            artistId: 4,
            name: 'Artist 4'
        },
        genre: {
            genreId: 2,
            name: 'Jazz'
        }
    }
];

// GetAllGenres method which returns array of mocked Genre models Disco, Jazz & Rock
function getAllGenres(): Genre[] {
    return genres;
}

// GetAlbumsByGenre method which takes in genre name & returns array of mocked Album models
function getAlbumsByGenre(genreName: string) {
    // Return array filtered on genre name
    return albums.filter(album => album.genre?.name === genreName);
}

// GetAlbumById method which takes in album id & returns mocked Album model
// All properties should be populated including a mocked Artist & Genre
function getAlbumById(albumId: number) {
    // Return album filtered on album id
    return albums.find(album => album.albumId === albumId);
}

export default {
    getAllGenres,
    getAlbumsByGenre,
    getAlbumById
};