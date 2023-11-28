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
        <div>
            <h2>Browsing Genre: {genre}</h2>
            {/* List of albums */}
            <ul>
                {albums.map((album) => (
                    <li key={album.albumId}>
                        <Link href={`/store/details?id=${album.albumId}`}>
                            {album.artist?.name} - {album.title}
                        </Link>
                    </li>
                ))}
            </ul>
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