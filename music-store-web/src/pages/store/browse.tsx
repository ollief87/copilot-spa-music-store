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
    const res = await fetch(`http://localhost:3001/api/store/browse?genre=${genre}`); 
    const data = await res.json() as Album[];

    return {
        props: { 
            genre,
            albums: data
        },
    };
};