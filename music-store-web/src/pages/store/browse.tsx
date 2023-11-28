// src/pages/store/browse.tsx
import { Album } from '@/models/album';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

type StoreBrowseProps = {
    genre: string;
    albums: Album[];
};

export default function StoreBrowse({ genre, albums }: StoreBrowseProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h2 className="text-2xl font-bold mb-5">Browsing Genre: {genre}</h2>
            {albums.length > 0 ? (
                <ul className="space-y-2 mb-5">
                    {albums.map((album) => (
                        <li key={album.albumId} className="text-blue-500 hover:underline">
                            <Link href={`/store/details?id=${album.albumId}`}>
                                {album.artist?.name} - {album.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="mb-5">No albums found for this genre.</p>
            )}
            <Link href="/store" className="inline-block mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Back to Genres
            </Link>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const genre = context.query.genre; 
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/genres/${genre}/albums`); 
    const albums = await res.json() as Album[];

    return {
        props: { 
            genre,
            albums
        },
    };
};