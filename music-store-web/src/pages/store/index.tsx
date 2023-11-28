import { Genre } from "@/models/genre";
import { GetServerSideProps } from "next";
import Link from "next/link";

type StoreIndexProps = {
    genres: Genre[]; 
};

// NextJS landing page for the store
export default function StoreIndex({ genres }: StoreIndexProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h2 className="text-2xl font-bold mb-5">Browse Genres</h2>
            <ul className="space-y-2">
                {genres.map((genre) => (
                    <li key={genre.genreId} className="text-blue-500 hover:underline">
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/genres`);
    const genres = await res.json() as Genre[];
    return {
        props: { 
            genres 
        },
    };
};