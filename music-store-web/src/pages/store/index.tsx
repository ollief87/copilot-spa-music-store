import { Genre } from "@/models/genre";
import { GetServerSideProps } from "next";
import Link from "next/link";

type StoreIndexProps = {
    genres: Genre[]; 
};

// NextJS landing page for the store
export default function StoreIndex({ genres }: StoreIndexProps) {
    return (
        <div>
            <h2>Browse Genres</h2>
            <ul>
                {genres.map((genre) => (
                    <li key={genre.genreId}>
                        <Link href={`/store/browse?genre=${genre.name}`}>
                            {genre.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('http://localhost:3001/api/genres');
    const genres = await res.json() as Genre[];
    return {
        props: { 
            genres 
        },
    };
};